// Background Service Worker for EC Translation Extension

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'TRANSLATE') {
    handleTranslationRequest(request.text, sendResponse);
    return true; // Keep message channel open for asynchronous response
  }
});

/**
 * Handles language detection, caching, and API request for translation.
 */
async function handleTranslationRequest(text, sendResponse) {
  try {
    const trimmedText = text.trim();
    if (!trimmedText) {
      sendResponse({ success: false, error: 'Metin boş olamaz.' });
      return;
    }

    // 1. Detect language
    const sourceLang = await detectLanguage(trimmedText);
    
    // 2. Set source and target languages
    // - tr -> en
    // - en -> tr
    // - other -> tr
    let targetLang = 'tr';
    if (sourceLang === 'tr') {
      targetLang = 'en';
    } else if (sourceLang === 'en') {
      targetLang = 'tr';
    }

    const langpair = `${sourceLang}|${targetLang}`;
    const cacheKey = `${trimmedText.toLowerCase()}_${langpair}`;

    // 3. Load cache and history from chrome.storage.local
    const data = await chrome.storage.local.get(['cache', 'history']);
    let cache = data.cache || {};
    let history = data.history || [];

    // Prune cache to keep it clean (remove items older than 24 hours)
    cache = pruneCache(cache);

    const now = Date.now();
    
    // Check if the query is in cache and valid (under 5 minutes)
    if (cache[cacheKey] && (now - cache[cacheKey].timestamp < 5 * 60 * 1000)) {
      console.log('Cache hit:', cacheKey);
      const translation = cache[cacheKey].translation;

      // Update history to put this query at the top
      const updatedHistory = addToHistory(history, trimmedText, translation, sourceLang, targetLang);
      await chrome.storage.local.set({ cache, history: updatedHistory });

      sendResponse({
        success: true,
        translation: translation,
        sourceLang: sourceLang,
        targetLang: targetLang,
        cached: true
      });
      return;
    }

    // 4. Fetch from MyMemory Translation API
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(trimmedText)}&langpair=${langpair}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    
    // Extract translated text
    const translation = json.responseData ? json.responseData.translatedText : null;
    if (!translation || json.responseStatus === 400) {
      throw new Error('API returned empty response or error');
    }

    // 5. Update Cache
    cache[cacheKey] = {
      translation: translation,
      timestamp: now
    };

    // 6. Update History
    const updatedHistory = addToHistory(history, trimmedText, translation, sourceLang, targetLang);

    // Save everything back to storage
    await chrome.storage.local.set({ cache, history: updatedHistory });

    sendResponse({
      success: true,
      translation: translation,
      sourceLang: sourceLang,
      targetLang: targetLang,
      cached: false
    });

  } catch (error) {
    console.error('Translation error:', error);
    sendResponse({
      success: false,
      error: 'Çeviri alınamadı, tekrar dene'
    });
  }
}

/**
 * Detects language using chrome.i18n.detectLanguage API.
 * Falls back to regex-based detection if API fails or returns uncertain results.
 */
function detectLanguage(text) {
  return new Promise((resolve) => {
    if (chrome.i18n && chrome.i18n.detectLanguage) {
      chrome.i18n.detectLanguage(text, (result) => {
        if (result && result.languages && result.languages.length > 0) {
          const detected = result.languages[0].language;
          console.log(`chrome.i18n detected: ${detected} (isReliable: ${result.isReliable})`);
          resolve(detected);
        } else {
          console.log('chrome.i18n returned no languages, using fallback');
          resolve(fallbackDetect(text));
        }
      });
    } else {
      console.log('chrome.i18n.detectLanguage not available, using fallback');
      resolve(fallbackDetect(text));
    }
  });
}

/**
 * Fallback detection: If text contains Turkish characters, returns 'tr', else 'en'.
 */
function fallbackDetect(text) {
  const turkishChars = /[ğüşıöçİĞÜŞIÖÇ]/;
  if (turkishChars.test(text)) {
    return 'tr';
  }
  return 'en';
}

/**
 * Adds a new entry to the translation history array, keeping it limited to 20 items.
 */
function addToHistory(history, text, translation, sourceLang, targetLang) {
  // Remove existing entries of the exact same query and languages to avoid duplicates
  const filtered = history.filter(
    item => !(item.text.toLowerCase() === text.toLowerCase() && 
             item.sourceLang === sourceLang && 
             item.targetLang === targetLang)
  );

  const newItem = {
    text,
    translation,
    sourceLang,
    targetLang,
    timestamp: Date.now()
  };

  // Prepend to list
  filtered.unshift(newItem);

  // Cap size at 20
  if (filtered.length > 20) {
    filtered.pop();
  }

  return filtered;
}

/**
 * Removes cache entries older than 24 hours to keep local storage clean.
 */
function pruneCache(cache) {
  const now = Date.now();
  const cleaned = {};
  const oneDayMs = 24 * 60 * 60 * 1000;
  
  for (const key in cache) {
    if (now - cache[key].timestamp < oneDayMs) {
      cleaned[key] = cache[key];
    }
  }
  return cleaned;
}
