# 📌 Clean Code, Debug & Siber Güvenlik

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 Clean Code Nedir?

Kodun **okunması, anlaşılması ve değiştirilmesi kolay** olmasıdır.

### İyi vs Kötü Kod:
```javascript
// ❌ Kötü
let x = 25;
function yap() { ... }

// ✅ İyi
let yas = 25;
function kullaniciyiKaydet() { ... }
```

### DRY Kuralı:
```javascript
// ❌ Kötü - Tekrar
console.log("Merhaba Ahmet");
console.log("Merhaba Ayşe");

// ✅ İyi - DRY (Don't Repeat Yourself)
function selamla(isim) {
    console.log("Merhaba " + isim);
}
selamla("Ahmet");
selamla("Ayşe");
```

### Clean Code Kuralları:
```
✅ Anlamlı isim ver
✅ DRY - Kendini tekrarlama
✅ Tek sorumluluk prensibi
✅ Kısa fonksiyonlar (max 30 satır)
✅ Yorum satırı ekle
```

---

## 🔑 Debug / Hata Okuma

### Hata Türleri:
```
Error      → Kodu DURDURUR! 🔴
Warning    → Kod çalışır ama dikkat et! 🟡
Stack Trace→ Hatanın nereden geldiğini gösterir
```

### Stack Trace:
```
TypeError: Cannot read properties
    at login (app.js:25)    ← Hata burada!
    at index.js:10          ← Buradan çağrıldı
    
→ Alttan üste oku!
```

### Browser Console:
```
F12 → Console → Hataları gör
F12 → Network → API isteklerini gör
```

---

## 🔑 Siber Güvenlik

### SQL Injection:
```sql
-- Hacker login formuna yazar:
Email: admin'--

-- Sistem bunu çalıştırır:
SELECT * FROM users WHERE email='admin'--'
-- Şifresiz giriş! 😱

-- Korunma: Parametreli sorgular kullan!
```

### XSS (Cross Site Scripting):
```html
<!-- Hacker yorum kutusuna yazar: -->
<script>alert('Saldırı!')</script>

-- Korunma: Kullanıcı girdisini temizle!
```

### Brute Force:
```
Bot saniyede 1000 şifre dener
→ Korunma: Deneme limiti + Güçlü şifre!
```

### Phishing:
```
Gerçek: www.google.com
Sahte:  www.g00gle.com ← 0 ile!
→ Korunma: URL'yi kontrol et!
```

### Güvenlik Kuralları:
```
✅ .env'de şifre sakla
✅ HTTPS kullan
✅ Input validation yap
✅ Güçlü şifre + 2FA
✅ Güncel paketler kullan
❌ Şifreyi koda yazma!
❌ .env'i GitHub'a yükleme!
```

---

## 📋 Özet

```
Clean Code:
→ Anlamlı isim, DRY, tek sorumluluk

Debug:
→ Error, Warning, Stack Trace
→ Console + Network tab

Güvenlik:
→ SQL Injection → Parametreli sorgu
→ XSS → Input temizle
→ Brute Force → Deneme limiti
→ .env → Şifreleri sakla
```