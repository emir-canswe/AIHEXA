# 📌 HTTP, REST API & JSON

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 HTTP Nedir?

İnternet üzerinde **bilgi taşıyan protokoldür**.

```
Tarayıcı → istek gönderir → Sunucu
Sunucu   → cevap gönderir → Tarayıcı
```

---

## 🔑 HTTP Metodları

| Metod | Ne yapar? | CRUD |
|-------|-----------|------|
| `GET` | Veri çeker | Read |
| `POST` | Veri gönderir | Create |
| `PUT` | Veri günceller | Update |
| `DELETE` | Veri siler | Delete |

---

## 🔑 HTTP Status Kodları

```
2xx → Başarılı ✅
200 → OK
201 → Created

4xx → İstemci Hatası ❌
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found

5xx → Sunucu Hatası ❌
500 → Internal Server Error
```

---

## 🔑 REST API Nedir?

Frontend ile Backend arasındaki **anlaşma kurallarıdır**.

```
GET    /api/users      → Tüm kullanıcılar
GET    /api/users/1    → 1 numaralı kullanıcı
POST   /api/users      → Yeni kullanıcı ekle
PUT    /api/users/1    → 1 numaralı güncelle
DELETE /api/users/1    → 1 numaralı sil
```

---

## 🔑 JSON Nedir?

Frontend ve Backend arasında **veri taşıyan formattır**.

```json
{
    "isim": "Emir",
    "yas": 22,
    "aktif": true,
    "hobiler": ["kodlama", "müzik"],
    "adres": {
        "sehir": "İstanbul"
    }
}
```

### JSON Kuralları:
```
✅ Key'ler çift tırnak içinde
✅ Metin çift tırnak içinde
✅ Sayılar tırnaksız
✅ Son elemanda virgül yok
❌ Yorum satırı yok!
```

### JavaScript'te JSON:
```javascript
// JSON → Obje
const obje = JSON.parse('{"isim":"Emir"}');

// Obje → JSON
const json = JSON.stringify({ isim: "Emir" });
```

---

## 🔑 Postman Nedir?

API'leri **test etmek için** kullanılan araçtır.

```
1. Metod seç (GET, POST...)
2. URL yaz
3. Body'e JSON ekle (POST için)
4. Send tıkla
5. Cevabı incele
```

---

## 📋 Özet

```
HTTP    → İnternet protokolü
GET     → Veri çek
POST    → Veri gönder
PUT     → Güncelle
DELETE  → Sil
200 ✅  → Başarılı
404 ❌  → Bulunamadı
500 ❌  → Sunucu hatası
JSON    → Veri formatı
Postman → API test aracı
```