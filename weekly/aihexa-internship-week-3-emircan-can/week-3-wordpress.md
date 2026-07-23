# 🌐 WordPress Derinlemesine

**Öğrenci:** Emircan Can  
**Staj Yeri:** AIHEXA  
**Tarih:** Temmuz 2026  
**Konu:** WordPress Tema, Plugin, WooCommerce

---

## 1️⃣ WordPress Tema Nedir?

Tema, WordPress sitesinin tüm görünümünü kontrol eden yapıdır. Renkler, yazı tipleri, sayfa düzeni, header ve footer tasarımı gibi görsel unsurların tamamı tema tarafından yönetilir.

**İki tür tema vardır:**

| Tür | Açıklama | Örnek |
|-----|----------|-------|
| Ücretsiz | WordPress.org'dan indirilir | Astra, OceanWP, GeneratePress |
| Ücretli | ThemeForest gibi sitelerden satın alınır | Divi, Avada, Flatsome |

**Tema seçerken dikkat edilmesi gerekenler:**
- Hızlı yüklenmelidir
- Mobil uyumlu (responsive) olmalıdır
- Düzenli güncelleme almalıdır
- SEO dostu olmalıdır
- Aktif destek ekibi bulunmalıdır

---

## 2️⃣ Tema Özelleştirme Nedir?

WordPress'te temayı kendi ihtiyaçlarına göre düzenleme işlemidir. `Appearance → Customize` menüsünden erişilir.

**Özelleştirilebilecek alanlar:**

| Alan | İçerik |
|------|--------|
| Site Kimliği | Logo, başlık, slogan, favicon |
| Renkler | Ana renk, arka plan, yazı, link renkleri |
| Yazı Tipleri | Başlık ve içerik fontları, boyutlar |
| Header | Menü düzeni, logo konumu, arama çubuğu |
| Footer | Alt bilgi metni, widget alanları, sosyal medya |
| Menüler | Navigasyon, footer ve mobil menüler |

---

## 3️⃣ Child Theme Nedir?

Child Theme, ana temanın kopyasıdır. Ana temayı direkt düzenlemek tehlikelidir çünkü tema güncellendiğinde yapılan değişiklikler silinir. Child Theme kullanıldığında ana tema güncellense bile yapılan değişiklikler korunur.

**Child Theme nasıl oluşturulur?**
```
Yöntem 1: Child Theme Configurator plugin'i kullan
Yöntem 2: Manuel olarak style.css ve functions.php oluştur
```

---

## 4️⃣ Plugin Nedir?

Plugin, WordPress'e ekstra özellik katan eklentidir. Tema görünümü değiştirirken plugin özellik ekler.

**En önemli pluginler:**

| Kategori | Plugin | Açıklama |
|----------|--------|----------|
| Tasarım | Elementor | Sürükle bırak sayfa tasarımı |
| SEO | Yoast SEO | Google optimizasyonu |
| Güvenlik | Wordfence | Güvenlik duvarı |
| Yedekleme | UpdraftPlus | Otomatik yedekleme |
| Hız | W3 Total Cache | Önbellekleme |
| Form | Contact Form 7 | İletişim formu |
| E-Ticaret | WooCommerce | Online mağaza |

---

## 5️⃣ Hook Nedir?

Hook, WordPress'in belirli noktalarına kod eklememizi sağlayan sistemdir.

**İki tür hook vardır:**

```
Action Hook:
→ Bir olay gerçekleşince çalışır
→ Örnek: Kullanıcı kayıt olunca email gönder

Filter Hook:
→ Veriyi değiştirmek için kullanılır
→ Örnek: Başlığa otomatik metin ekle
```

---

## 6️⃣ WooCommerce Nedir?

WooCommerce, WordPress için geliştirilmiş en popüler e-ticaret eklentisidir. WordPress ile birlikte kullanıldığında tam işlevli bir online mağaza oluşturulabilir.

**WooCommerce'in sağladıkları:**

| Alan | Özellikler |
|------|-----------|
| Ürün Yönetimi | Fiziksel, dijital, abonelik ürünleri |
| Ödeme | PayPal, Stripe, İyzico, havale |
| Kargo | Sabit ücret, ücretsiz, bölgeye göre |
| Müşteri | Hesap, sipariş geçmişi, adres defteri |
| Raporlama | Satış, ürün, müşteri raporları |

**WooCommerce ürün türleri:**

| Tür | Açıklama | Örnek |
|-----|----------|-------|
| Simple | Tek fiyatlı, tek çeşit | Kitap, kalem |
| Variable | Farklı renk, beden seçenekleri | T-shirt |
| Grouped | Birden fazla ürün bir arada | Kalem seti |
| Digital | İndirilebilir ürün | E-kitap, kurs |

**WooCommerce kurulum adımları:**
```
1. Plugins → Add New → WooCommerce ara
2. Install → Activate
3. Kurulum sihirbazını takip et
4. Mağaza bilgilerini gir
5. Ödeme sistemini seç
6. Kargo ayarla
7. İlk ürünü ekle
8. Test siparişi ver ✅
```

---

## 7️⃣ AIHEXA İçin WooCommerce Kullanımı

AIHEXA bir eğitim şirketi olduğundan WooCommerce aşağıdaki alanlarda kullanılabilir:

```
→ Kurs satışı (Digital Product)
→ Eğitim paketi satışı (Grouped Product)
→ Abonelik sistemi (Subscription)
→ İyzico ile ödeme entegrasyonu
→ Otomatik fatura oluşturma
→ Öğrenci hesap yönetimi
```

---

## 8️⃣ WordPress Güvenlik Kuralları

```
✅ Tüm plugin ve temaları güncel tut
✅ Güçlü şifre kullan
✅ SSL sertifikası kur (HTTPS)
✅ Düzenli yedek al (UpdraftPlus)
✅ Güvenlik plugin'i kur (Wordfence)
✅ Admin kullanıcı adını değiştir
❌ Nulled (crack) tema/plugin kullanma
❌ Gereksiz plugin yükleme
❌ wp-config.php'yi GitHub'a yükleme
```

---

## 📋 Genel Özet

| Kavram | Açıklama |
|--------|----------|
| Tema | Sitenin görünümünü kontrol eder |
| Child Theme | Ana tema güncellemelerinden korunmak için |
| Plugin | Siteye ekstra özellik katar |
| Hook | WordPress'e kod ekleme sistemi |
| WooCommerce | WordPress e-ticaret eklentisi |
| Elementor | Sürükle bırak sayfa tasarımcısı |
| Yoast SEO | Google optimizasyon aracı |

---

*Emircan Can | AIHEXA Staj | Temmuz 2026*