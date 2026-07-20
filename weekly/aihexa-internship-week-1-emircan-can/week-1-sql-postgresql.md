# 📌 SQL & PostgreSQL

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 PostgreSQL Nedir?

Dünyanın en güçlü **açık kaynaklı veritabanıdır**.

```
Database (Veritabanı)
    └── Table (Tablo)
            └── Row (Satır) → Tek kayıt
            └── Column (Sütun) → Özellikler
```

---

## 🔑 Temel SQL Komutları

```sql
-- Database oluştur
CREATE DATABASE benimdb;

-- Tablo oluştur
CREATE TABLE kullanicilar (
    id    SERIAL PRIMARY KEY,
    isim  VARCHAR(100),
    email VARCHAR(100),
    yas   INTEGER
);

-- Ekle
INSERT INTO kullanicilar (isim, email, yas)
VALUES ('Emir', 'emir@mail.com', 22);

-- Çek
SELECT * FROM kullanicilar;
SELECT * FROM kullanicilar WHERE yas > 20;
SELECT * FROM kullanicilar ORDER BY yas DESC;

-- Güncelle
UPDATE kullanicilar SET yas = 23 WHERE id = 1;

-- Sil
DELETE FROM kullanicilar WHERE id = 1;
```

---

## 🔑 Agregasyon

```sql
SELECT COUNT(*) FROM kullanicilar;
SELECT AVG(yas) FROM kullanicilar;
SELECT MAX(yas) FROM kullanicilar;
SELECT MIN(yas) FROM kullanicilar;
SELECT SUM(yas) FROM kullanicilar;
```

---

## 🔑 JOIN'ler

```sql
-- INNER JOIN
SELECT k.isim, p.proje_adi
FROM kullanicilar k
INNER JOIN projeler p ON k.id = p.kullanici_id;

-- LEFT JOIN
SELECT k.isim, p.proje_adi
FROM kullanicilar k
LEFT JOIN projeler p ON k.id = p.kullanici_id;
```

---

## 🔑 SubQuery

```sql
-- En yüksek maaşlı çalışan
SELECT isim FROM calisanlar
WHERE maas = (SELECT MAX(maas) FROM calisanlar);
```

---

## 📋 Özet

```
SELECT → Veri çek
INSERT → Ekle
UPDATE → Güncelle
DELETE → Sil
JOIN   → Tabloları birleştir
SubQuery → Sorgu içinde sorgu
```