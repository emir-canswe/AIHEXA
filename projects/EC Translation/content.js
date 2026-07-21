// Content Script for EC Translation Extension

let activePopupHost = null;

// Map language codes to Turkish names for UI presentation
const langNames = {
  'en': 'İngilizce',
  'tr': 'Türkçe',
  'de': 'Almanca',
  'fr': 'Fransızca',
  'es': 'İspanyolca',
  'it': 'İtalyanca',
  'ru': 'Rusça',
  'zh': 'Çince',
  'ja': 'Japonca',
  'ar': 'Arapça',
  'pt': 'Portekizce',
  'nl': 'Hollandaca'
};

// Listen for selection changes on mouseup
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('keydown', handleKeyDown);

/**
 * Handle mouse down: close popup if clicked outside
 */
function handleMouseDown(e) {
  if (activePopupHost) {
    const path = e.composedPath();
    if (!path.includes(activePopupHost)) {
      removePopup();
    }
  }
}

/**
 * Handle key down: close popup if ESC key pressed, or translate selection if Shift + T pressed
 */
function handleKeyDown(e) {
  if (e.key === 'Escape' && activePopupHost) {
    removePopup();
    return;
  }

  // Shift + T shortcut to translate selected text
  if (e.shiftKey && e.key.toLowerCase() === 't') {
    let selectedText = '';
    let rect = null;

    // 1. Check standard page text selection
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      selectedText = selection.toString().trim();
      try {
        const range = selection.getRangeAt(0);
        rect = range.getBoundingClientRect();
      } catch (err) {}
    } else {
      // 2. Check input and textarea selection
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        try {
          const start = activeEl.selectionStart;
          const end = activeEl.selectionEnd;
          if (start !== undefined && end !== undefined && start !== end) {
            selectedText = activeEl.value.substring(start, end).trim();
            rect = activeEl.getBoundingClientRect();
          }
        } catch (err) {}
      }
    }

    if (selectedText && /[a-zA-ZğüşıöçİĞÜŞIÖÇ]/.test(selectedText)) {
      e.preventDefault(); // Prevent typing 'T' or executing default behaviors when text is selected
      if (activePopupHost) {
        removePopup();
      }
      createTranslationPopup(selectedText, rect);
    }
  }
}

/**
 * Handle mouse up: retrieve text selection and trigger translation popup
 */
function handleMouseUp(e) {
  // Wait a tiny fraction of a second for selection to resolve in the DOM
  setTimeout(() => {
    // If we clicked inside the active popup, ignore
    if (activePopupHost) {
      const path = e.composedPath();
      if (path.includes(activePopupHost)) {
        return;
      }
    }

    let selectedText = '';
    let rect = null;

    // 1. Check standard page text selection
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      selectedText = selection.toString().trim();
      try {
        const range = selection.getRangeAt(0);
        rect = range.getBoundingClientRect();
      } catch (err) {
        console.error('Failed to get selection range rect', err);
      }
    } else {
      // 2. Check input and textarea selection
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        try {
          const start = activeEl.selectionStart;
          const end = activeEl.selectionEnd;
          if (start !== undefined && end !== undefined && start !== end) {
            selectedText = activeEl.value.substring(start, end).trim();
            rect = activeEl.getBoundingClientRect();
          }
        } catch (err) {
          // Input type might not support selectionStart/End (e.g., email, number)
        }
      }
    }

    // Only translate if selection is valid and has actual characters (letters)
    if (selectedText && /[a-zA-ZğüşıöçİĞÜŞIÖÇ]/.test(selectedText)) {
      // Limit text length to avoid extremely long requests
      if (selectedText.length > 1000) {
        selectedText = selectedText.substring(0, 1000) + '...';
      }
      
      // If there's an existing popup, clean it up before opening a new one
      if (activePopupHost) {
        removePopup();
      }
      
      createTranslationPopup(selectedText, rect);
    }
  }, 30);
}

/**
 * Creates, positions, and populates the translation popup inside a Shadow DOM
 */
function createTranslationPopup(text, rect) {
  if (!rect) return;

  // 1. Create Host Element and attach to body
  const host = document.createElement('div');
  host.id = 'ec-translation-popup-root';
  document.body.appendChild(host);
  activePopupHost = host;

  // 2. Attach Shadow DOM (ensures absolute CSS isolation from target website)
  const shadow = host.attachShadow({ mode: 'open' });

  // 3. Inject Web Accessible CSS link
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = chrome.runtime.getURL('popup.css');
  shadow.appendChild(link);

  // 4. Create Card element
  const card = document.createElement('div');
  card.className = 'popup-card';
  
  // Format long selection strings to not break card layout
  let displayTitle = text;
  if (displayTitle.length > 60) {
    displayTitle = displayTitle.substring(0, 57) + '...';
  }

  card.innerHTML = `
    <button class="close-btn" aria-label="Kapat">&times;</button>
    <div class="source-text">${escapeHtml(displayTitle)}</div>
    <div class="lang-badge">Dil Algılanıyor...</div>
    <div class="translation-container">
      <div class="spinner-container">
        <div class="spinner"></div>
      </div>
    </div>
    <button class="listen-btn" style="display: none;">🔊 Dinle</button>
  `;
  
  shadow.appendChild(card);

  // 5. Setup event listeners inside the Shadow DOM
  const closeBtn = card.querySelector('.close-btn');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    removePopup();
  });

  const listenBtn = card.querySelector('.listen-btn');

  // 6. Calculate position and show card with entry transition
  // Hide layout visually first to read dimensions safely
  card.style.visibility = 'hidden';
  card.style.display = 'block';
  
  // Force layout calculation and position card
  setTimeout(() => {
    positionPopup(host, card, rect);
    card.style.visibility = '';
    card.classList.add('visible');
  }, 0);

  // 7. Request translation from background service worker
  chrome.runtime.sendMessage({ type: 'TRANSLATE', text: text }, (response) => {
    // If popup was closed before fetch returned, do nothing
    if (activePopupHost !== host) return;

    const badge = card.querySelector('.lang-badge');
    const container = card.querySelector('.translation-container');

    if (chrome.runtime.lastError || !response || !response.success) {
      badge.textContent = 'Hata';
      container.innerHTML = `<p class="error-text">${escapeHtml(response?.error || 'Çeviri alınamadı, tekrar dene')}</p>`;
      // Re-position because size changed
      positionPopup(host, card, rect);
      return;
    }

    // Success response handling
    const sourceLangName = langNames[response.sourceLang] || response.sourceLang.toUpperCase();
    const targetLangName = langNames[response.targetLang] || response.targetLang.toUpperCase();
    badge.textContent = `${sourceLangName} → ${targetLangName}`;
    
    container.innerHTML = `<p class="translation-text">${escapeHtml(response.translation)}</p>`;
    
    // Enable and style pronunciation button
    listenBtn.style.display = 'inline-flex';
    listenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakText(text, response.sourceLang);
    });

    // Re-position because text injection might change popup height
    positionPopup(host, card, rect);
  });
}

/**
 * Safely positions the popup host relative to selection coordinates, preventing offscreen clipping.
 */
function positionPopup(host, card, rect) {
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  const popupWidth = card.offsetWidth || 280;
  const popupHeight = card.offsetHeight || 150;
  const gap = 10;
  
  // Try centering horizontal position above selection
  let left = rect.left + (rect.width / 2) - (popupWidth / 2) + scrollX;
  // Try positioning above selection
  let top = rect.top - popupHeight - gap + scrollY;
  
  // Boundary check - Horizontal left/right edges
  const minLeft = scrollX + gap;
  const maxLeft = scrollX + viewportWidth - popupWidth - gap;
  if (left < minLeft) {
    left = minLeft;
  } else if (left > maxLeft) {
    left = maxLeft;
  }
  
  // Boundary check - Vertical top edge
  if (rect.top - popupHeight - gap < gap) {
    // If it clips top of screen, display BELOW selection instead
    top = rect.bottom + gap + scrollY;
    
    // Check if it clips bottom of screen
    const maxTop = scrollY + viewportHeight - popupHeight - gap;
    if (top > maxTop) {
      top = scrollY + gap; // Fallback to top edge if both clip
    }
  }
  
  host.style.left = `${left}px`;
  host.style.top = `${top}px`;
}

/**
 * Removes the active popup with a smooth fade-out exit transition
 */
function removePopup() {
  if (!activePopupHost) return;
  const host = activePopupHost;
  activePopupHost = null;
  
  const card = host.shadowRoot.querySelector('.popup-card');
  if (card) {
    card.classList.remove('visible');
  }
  
  // Wait for 150ms CSS fade-out animation to complete before removing from DOM
  setTimeout(() => {
    if (host.parentNode) {
      host.parentNode.removeChild(host);
    }
  }, 150);
}

/**
 * Pronounces selection text using native window.speechSynthesis
 */
function speakText(text, langCode) {
  if (!window.speechSynthesis) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }
  
  // Stop current speech output
  window.speechSynthesis.cancel();
  
  // Determine appropriate locale voice tag
  let ttsLang = 'en-US';
  if (langCode === 'tr') {
    ttsLang = 'tr-TR';
  } else if (langCode === 'en') {
    ttsLang = 'en-US';
  } else {
    // Use raw language code as fallback (e.g., 'de', 'fr')
    ttsLang = langCode;
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = ttsLang;
  
  // Select matching system voice if available
  const setVoiceAndSpeak = () => {
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => 
      v.lang.toLowerCase() === ttsLang.toLowerCase() || 
      v.lang.toLowerCase().startsWith(ttsLang.split('-')[0].toLowerCase())
    );
    if (voice) {
      utterance.voice = voice;
    }
    window.speechSynthesis.speak(utterance);
  };
  
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    setVoiceAndSpeak();
  } else {
    // Listen for asynchronous voice loading event
    window.speechSynthesis.onvoiceschanged = () => {
      setVoiceAndSpeak();
      window.speechSynthesis.onvoiceschanged = null; // Clean listener
    };
  }
}

/**
 * Helper to prevent XSS attacks in card content
 */
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
