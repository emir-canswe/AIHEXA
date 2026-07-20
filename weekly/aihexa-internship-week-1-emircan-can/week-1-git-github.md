# 📌 Git & GitHub

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 Git Nedir?

Git, yazılım projelerinde yapılan değişiklikleri takip eden bir **versiyon kontrol sistemidir**.

- Her değişikliği kayıt altına alır
- Geçmişe dönebilirsin
- Takım arkadaşlarınla aynı anda çalışabilirsin

```
Git = Kamera 📷 (kayıt yapan)
```

---

## 🔑 GitHub Nedir?

GitHub, Git ile kaydettiğin kodları **internette saklayan platformdur**.

```
GitHub = Google Photos ☁️ (internette saklayan)
```

---

## 🔑 Temel Git Komutları

| Komut | Ne yapar? |
|-------|-----------|
| `git init` | Klasörü Git'e tanıtır |
| `git add .` | Tüm değişiklikleri hazırlar |
| `git commit -m "mesaj"` | Kayıt oluşturur |
| `git push origin main` | GitHub'a gönderir |
| `git pull origin main` | GitHub'dan çeker |
| `git clone URL` | Projeyi indirir |
| `git status` | Durumu gösterir |
| `git log --oneline` | Geçmişi gösterir |
| `git branch` | Branch listeler |
| `git checkout -b yeni` | Branch oluşturup geçer |
| `git merge branch-adi` | Branch birleştirir |

---

## 🔑 Branch Nedir?

Branch, kodun **paralel kopyasıdır**. Ana kodu bozmadan yeni özellik geliştirirsin.

```bash
# Yeni branch oluştur ve geç
git checkout -b yeni-ozellik

# Değişiklikleri kaydet
git add .
git commit -m "yeni özellik eklendi"

# GitHub'a gönder
git push origin yeni-ozellik

# Main'e birleştir
git checkout main
git merge yeni-ozellik
```

---

## 🔑 SSH Nedir?

SSH, GitHub'a **şifre girmeden güvenli bağlanma** yöntemidir.

```bash
# SSH key oluştur
ssh-keygen -t ed25519 -C "email@mail.com"

# Public key'i kopyala
cat ~/.ssh/id_ed25519.pub

# GitHub → Settings → SSH Keys → Ekle
```

---

## 🔑 İleri Seviye Komutlar

```bash
git stash          # Değişiklikleri geçici sakla
git stash pop      # Geri getir
git fetch origin   # İndir ama merge etme
git rebase main    # Geçmişi temiz tut
git reset --soft HEAD~1  # Son commiti geri al
git cherry-pick abc123   # Tek commit al
```

---

## 📋 Özet

```
Git    → Kod takip sistemi
GitHub → Kodları internette saklar
Branch → Paralel geliştirme
SSH    → Şifresiz bağlantı
```