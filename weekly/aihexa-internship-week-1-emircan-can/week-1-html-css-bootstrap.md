# 📌 HTML5, CSS3 & Bootstrap 5

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 HTML5 Nedir?

HTML, web sayfalarının **iskeletidir**. HTML5, HTML'nin en güncel versiyonudur.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sayfa açıklaması">
    <title>Sayfa Başlığı</title>
</head>
<body>
    <!-- İçerik buraya -->
</body>
</html>
```

---

## 🔑 HTML5 Temel Etiketler

### Yapısal Etiketler:
```html
<header>   → Üst bölüm
<nav>      → Navigasyon menüsü
<main>     → Ana içerik
<section>  → Bölüm
<article>  → Makale
<aside>    → Yan panel
<footer>   → Alt bölüm
<div>      → Genel kutu (blok)
<span>     → Satır içi kutu
```

### Yazı Etiketleri:
```html
<h1> → <h6>  → Başlıklar
<p>           → Paragraf
<strong>      → Kalın
<em>          → İtalik
<a href="">   → Link
<img src="">  → Resim
```

### Form Etiketleri:
```html
<input type="text">     → Metin
<input type="email">    → Email
<input type="password"> → Şifre
<input type="checkbox"> → Onay kutusu
<textarea>              → Büyük metin
<select>                → Açılır menü
<button>                → Buton
```

---

## 🔑 CSS3 Nedir?

CSS, web sayfalarının **görünümünü** belirler.

```css
/* Genel Sıfırlama */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Renkler */
color: #333;
background-color: #f4f4f4;

/* Yazı */
font-size: 16px;
font-family: Arial, sans-serif;
font-weight: bold;

/* Kutu Modeli */
width: 300px;
height: 200px;
padding: 20px;
margin: 10px;
border: 1px solid #ddd;
border-radius: 8px;

/* Gölge */
box-shadow: 2px 2px 5px gray;

/* Geçiş */
transition: all 0.3s ease;
```

### Flexbox:
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
```

### Grid:
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
```

### Responsive Tasarım:
```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

### CSS Ekleme Yöntemleri:
```html
<!-- External CSS (En iyi!) -->
<link rel="stylesheet" href="style.css">

<!-- Internal CSS -->
<style>
    h1 { color: blue; }
</style>

<!-- Inline CSS (Kaçın!) -->
<h1 style="color: blue;">Başlık</h1>
```

---

## 🔑 Bootstrap 5 Nedir?

Bootstrap, dünyanın en popüler **CSS framework'üdür**.

```html
<!-- CDN ile ekle -->
<link rel="stylesheet" 
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<script 
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
</script>
```

### Grid Sistemi:
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Sol</div>
        <div class="col-md-6">Sağ</div>
    </div>
</div>
```

### Butonlar:
```html
<button class="btn btn-primary">Mavi</button>
<button class="btn btn-success">Yeşil</button>
<button class="btn btn-danger">Kırmızı</button>
```

### Boşluklar:
```html
<div class="mt-3">Üst boşluk</div>
<div class="mb-3">Alt boşluk</div>
<div class="p-3">İç boşluk</div>
```

### Bileşenler:
```html
<!-- Card -->
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Başlık</h5>
        <p class="card-text">İçerik</p>
    </div>
</div>

<!-- Alert -->
<div class="alert alert-success">Başarılı!</div>

<!-- Badge -->
<span class="badge bg-primary">Yeni</span>
```

---

## 📋 Özet

```
HTML5  → Web sayfasının iskeleti
CSS3   → Web sayfasının görünümü
Bootstrap → Hazır CSS framework

HTML5 = Bina iskeleti 🏗️
CSS3  = Binanın dekorasyonu 🎨
Bootstrap = Hazır prefabrik ev 🏠
```