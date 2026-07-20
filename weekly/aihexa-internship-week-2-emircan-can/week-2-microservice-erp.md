# 📌 Mikroservis, ERP & Sistem Mimarileri

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 ERP Nedir?

ERP = **Enterprise Resource Planning** = Kurumsal Kaynak Planlaması

```
Büyük şirketlerin tüm işlemlerini
tek bir sistemde yönettikleri yazılım!

Örnek: SAP, Oracle, Microsoft Dynamics

Kapsar:
→ Muhasebe yönetimi
→ İnsan kaynakları
→ Stok takibi
→ Satış takibi
```

---

## 🔑 B2B vs B2C

| | B2B | B2C |
|--|-----|-----|
| Açıklama | Business to Business | Business to Consumer |
| Türkçe | İşletmeden İşletmeye | İşletmeden Tüketiciye |
| Örnek | Toptancı → Market | Amazon → Sen |
| Miktar | Toplu | Az |
| Fiyat | Pazarlıklı | Sabit |

---

## 🔑 Mikroservis Mimarisi Nedir?

Her özelliğin **ayrı bir servis** olduğu mimaridir.

### Monolitik vs Mikroservis:
```
MONOLİTİK:
┌─────────────────────┐
│  Login              │
│  Ürün Yönetimi      │  → Bir hata = HEPSİ ÇÖKER! 😱
│  Ödeme              │
└─────────────────────┘

MİKROSERVİS:
┌──────┐ ┌──────┐ ┌──────┐
│Login │ │Ürün  │ │Ödeme │  → Bir hata = Sadece O! ✅
└──────┘ └──────┘ └──────┘
```

### Avantajları:
```
✅ Bağımsız geliştirme
✅ Hata izolasyonu
✅ Ölçeklenebilirlik
✅ Farklı teknoloji kullanımı
```

### Dezavantajları:
```
❌ Karmaşık yapı
❌ Zor yönetim
❌ Network gecikmesi
```

### Araçlar:
```
Docker     → Servisleri container'a koy
Kubernetes → Container'ları yönet
API Gateway→ Tek giriş noktası
RabbitMQ   → Servisler arası mesajlaşma
```

---

## 🔑 Java 17 & 11 Neden Önemli?

```
LTS = Long Term Support = Uzun Süreli Destek

Java 11 → 2018 (LTS) → Hâlâ çok kullanılıyor
Java 17 → 2021 (LTS) → Günümüzde tercih edilen ✅

Neden Java?
→ ERP sistemleri Java ile yazılır (SAP, Oracle)
→ Büyük şirketler kullanır
→ Backend geliştirme
→ Mikroservis mimarisi
```

---

## 🔑 SQL Partition Nedir?

Büyük tabloları **küçük parçalara bölme** işlemidir.

```sql
-- Range Partition - Tarihe göre
CREATE TABLE siparisler (
    id    INTEGER,
    tarih DATE
) PARTITION BY RANGE (tarih);

-- List Partition - Şehre göre
CREATE TABLE musteriler (
    id    INTEGER,
    sehir VARCHAR(50)
) PARTITION BY LIST (sehir);
```

### Neden Kullanılır?
```
→ Sorgu hızı artar
→ Büyük veriler yönetilir
→ Eski veriler kolayca silinir
```

---

## 📋 Özet

```
ERP          → Kurumsal yönetim sistemi
B2B          → Şirketten şirkete
B2C          → Şirketten müşteriye
Mikroservis  → Her özellik ayrı servis
Java LTS     → Uzun süreli destekli versiyon
SQL Partition→ Büyük tabloyu böl
```