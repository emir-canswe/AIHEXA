# 📌 Node.js & Express.js

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 Node.js Nedir?

JavaScript'i **tarayıcı dışında** (sunucuda) çalıştıran platformdur.

```
Eskiden JavaScript → Sadece tarayıcıda
Node.js ile → Sunucuda da çalışır! ✅
```

---

## 🔑 Express.js Nedir?

Node.js için en popüler **web framework'üdür**.

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// GET
app.get('/api/users', (req, res) => {
    res.json([{ id: 1, isim: 'Emir' }]);
});

// POST
app.post('/api/users', (req, res) => {
    res.status(201).json({ mesaj: 'Eklendi!' });
});

// PUT
app.put('/api/users/:id', (req, res) => {
    res.json({ mesaj: 'Güncellendi!' });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
    res.json({ mesaj: 'Silindi!' });
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda!');
});
```

---

## 🔑 Middleware Nedir?

İstek ve cevap arasındaki **katmandır**.

```javascript
app.use(express.json());      // JSON okur
app.use((req, res, next) => {
    console.log('İstek geldi!');
    next(); // Devam et!
});
```

---

## 🔑 req & res

```javascript
app.get('/api/users', (req, res) => {
    req.params  // URL parametresi (/users/:id)
    req.query   // Query string (?isim=emir)
    req.body    // POST verisi
    req.headers // Header bilgileri

    res.json()       // JSON gönder
    res.status(200)  // Status kodu
    res.send()       // Metin gönder
});
```

---

## 🔑 .env Kullanımı

```bash
# .env dosyası
PORT=3000
DB_PASSWORD=sifre123
```

```javascript
require('dotenv').config();
const PORT = process.env.PORT;
app.listen(PORT);
```

---

## 🔑 Proje Yapısı

```
proje/
├── src/
│   ├── controllers/  → İş mantığı
│   ├── models/       → DB modelleri
│   ├── routes/       → URL yolları
│   └── middleware/   → Ara katmanlar
├── .env              → Gizli bilgiler
├── .gitignore
├── app.js
└── package.json
```

---

## 📋 Özet

```
Node.js    → JS'i sunucuda çalıştırır
Express    → Web framework
Route      → URL yolları
Middleware → Ara katman
req        → Gelen istek
res        → Giden cevap
.env       → Gizli bilgiler
```