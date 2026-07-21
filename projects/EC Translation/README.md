# EC Çeviri ve Telaffuz Aracı (Chrome Extension)

Web sayfalarında gezinirken bilmediğiniz yabancı kelimelerin Türkçe/İngilizce çevirisini ve doğru telaffuzunu sayfadan ayrılmadan, tek bir tıklamayla veya seçimle görmenizi sağlayan Manifest V3 tabanlı bir Chrome uzantısıdır.

---

## 🚀 Özellikler

- **Tek Tıkla / Çift Tıklamayla Çeviri**: Sayfa üzerinde herhangi bir kelimeye çift tıkladığınızda veya bir metin grubunu seçtiğinizde anında çeviri popup'ı görünür.
- **Klavye Kısayolu (Shift + T)**: Bir kelime veya metin seçtikten sonra `Shift + T` klavye kısayoluna basarak da çeviriyi anında tetikleyebilirsiniz.
- **Akıllı Dil Algılama**:
  - Chrome'un yerel `chrome.i18n.detectLanguage` API'sini kullanır.
  - Eğer algılanan dil Türkçe ise metni otomatik olarak **İngilizceye** (tr → en) çevirir.
  - Eğer algılanan dil İngilizce ise metni otomatik olarak **Türkçeye** (en → tr) çevirir.
  - Diğer tüm yabancı diller algılandığında varsayılan olarak **Türkçeye** çevirir.
  - İnternet bağlantısı olmaması veya API arızası durumunda, Türkçe özel karakter kontrolü (`ğ, ü, ş, ı, ö, ç, İ`) yapan akıllı bir fallback mekanizması devreye girer.
- **Sesli Telaffuz (TTS)**: Tarayıcının yerleşik `window.speechSynthesis` motorunu kullanarak kaynak dilde (örneğin İngilizce için `en-US`, Türkçe için `tr-TR`) kelimeleri doğru aksanla seslendirir.
- **Güçlü Önbellek (Caching)**: Aynı kelime veya cümle son **5 dakika** içinde çevrildiyse tekrar API isteği yapmaz, yerel önbellekten anında getirir.
- **Çeviri Geçmişi**: Çevirdiğiniz son **20** kelime/cümle otomatik olarak `chrome.storage.local` üzerinde güvenle saklanır.
- **Şık ve Güvenli Tasarım (Shadow DOM)**: 
  - Tasarımın, ziyaret ettiğiniz web sitelerinin CSS stillerinden (örneğin sıfırlama CSS'leri, fontlar vb.) etkilenmemesi için **Shadow DOM** yalıtımı kullanılmıştır.
  - Akıllı konumlandırma sayesinde popup ekranın dışına (sağ/sol/alt/üst kenarlara) taşmaz.
  - **Karanlık Mod (Dark Mode)** desteği vardır (`prefers-color-scheme: dark` ile otomatik eşleşir).
- **Kolay Kapanma**: Popup dışına tıklandığında veya klavyeden `ESC` tuşuna basıldığında yumuşak bir çıkış efektiyle kapanır.

---

## 📂 Dosya Yapısı

```text
EC Translation/
├── manifest.json       # Eklenti izinleri ve dosya eşleştirmeleri (MV3)
├── background.js       # Arka plan işlemler (dil tespiti, cache, API fetch)
├── content.js          # Sayfa içi seçim yakalama, Shadow DOM popup ve TTS motoru
├── popup.css           # Popup kartı, animasyonlar ve yüklenme spinner stilleri
└── icons/              # Eklenti logoları
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 🛠️ Kurulum Adımları (Chrome)

Eklentiyi bilgisayarınıza yerel olarak yüklemek için aşağıdaki adımları takip edin:

1. **Google Chrome** tarayıcısını açın.
2. Adres satırına `chrome://extensions/` yazın ve Enter'a basın.
3. Sağ üst köşede bulunan **Geliştirici modu (Developer mode)** seçeneğini aktif hale getirin.
4. Sol üst köşede çıkan **Paketlenmemiş öğe yükle (Load unpacked)** butonuna tıklayın.
5. Açılan klasör seçme penceresinde, bu projenin bulunduğu klasörü (içinde `manifest.json` olan `EC Translation` klasörünü) seçin.
6. Eklenti artık tarayıcınıza yüklendi! Herhangi bir web sayfasını yenileyerek test edebilirsiniz.

---

## 🧪 Nasıl Kullanılır?

1. Herhangi bir web sitesine girin (örneğin: [Wikipedia](https://en.wikipedia.org/)).
2. Sayfadaki bir kelimeye (örneğin `"serendipity"`) **çift tıklayın**, fareyle bir cümleyi **seçip bırakın** VEYA metni seçtikten sonra klavyeden **Shift + T** tuşlarına basın.
3. Seçtiğiniz alanın hemen yakınında açılan şık popup penceresinde çeviriyi göreceksiniz.
4. **🔊 Dinle** butonuna tıklayarak telaffuzunu dinleyebilirsiniz.
5. Kapatmak için sağ üstteki **×** işaretine basabilir, sayfada boş bir yere tıklayabilir veya **ESC** tuşunu kullanabilirsiniz.
