# 📌 Terminal Kullanımı

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 Terminal Nedir?

Terminal, bilgisayarına **yazarak komut verdiğin** yerdir. Mouse yok, tıklama yok — sadece yazı ile her şeyi yaparsın.

---

## 🔑 Dosya & Klasör Komutları

| Komut | Ne yapar? |
|-------|-----------|
| `pwd` | Nerede olduğunu gösterir |
| `ls` | Dosyaları listeler |
| `ls -la` | Detaylı listeler |
| `cd klasor` | Klasöre girer |
| `cd ..` | Bir üst klasöre çıkar |
| `mkdir yeni` | Yeni klasör oluşturur |
| `touch dosya.txt` | Yeni dosya oluşturur |
| `rm dosya.txt` | Dosyayı siler |
| `rm -rf klasor` | Klasörü siler |
| `cp dosya yeni` | Kopyalar |
| `mv dosya yeni` | Taşır/yeniden adlandırır |
| `cat dosya.txt` | İçeriği gösterir |
| `clear` | Ekranı temizler |

---

## 🔑 Arama Komutları

```bash
# Dosya ara
find . -name "dosya.txt"

# İçinde kelime ara
grep "kelime" dosya.txt

# Tüm klasörde ara
grep -r "kelime" .
```

---

## 🔑 Sistem Komutları

```bash
ps aux          # Çalışan processleri gör
kill -9 pid     # Process sonlandır
df -h           # Disk kullanımı
du -sh klasor   # Klasör boyutu
ping google.com # İnternet testi
curl URL        # URL'den veri çek
```

---

## 🔑 Kısayollar

| Kısayol | Ne yapar? |
|---------|-----------|
| `Ctrl + C` | Çalışan komutu durdur |
| `Ctrl + L` | Ekranı temizle |
| `Tab` | Otomatik tamamla |
| `↑ ↓` | Önceki komutlar |

---

## 🔑 NPM Komutları

```bash
npm init -y          # Proje başlat
npm install express  # Paket yükle
npm install -D nodemon # Dev paketi
npm uninstall express # Paket kaldır
npm start            # Projeyi başlat
npm run dev          # Dev modda başlat
npx komut            # Yüklemeden çalıştır
```

---

## 📋 Özet

```
Terminal = Yazarak komut verme aracı
pwd, ls, cd → Navigasyon
mkdir, touch → Oluşturma
rm, cp, mv → Silme/Kopyalama/Taşıma
grep, find → Arama
```