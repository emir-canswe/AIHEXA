# 📌 JavaScript & TypeScript

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 JavaScript Nedir?

Web sayfalarını **interaktif** yapan programlama dilidir.

```
HTML  → İskelet (yapı)
CSS   → Görünüm (tasarım)
JS    → Hareketler (etkileşim)
```

---

## 🔑 Temel JavaScript

### Değişkenler:
```javascript
let isim = "Emir";      // Değişebilir
const YAS = 22;          // Değişmez
var eskiYol = "eski";    // Kullanma!

// Veri Tipleri
let metin = "Merhaba";
let sayi = 25;
let bool = true;
let dizi = [1, 2, 3];
let obje = { isim: "Emir", yas: 22 };
let bos = null;
```

### Fonksiyonlar:
```javascript
// Normal fonksiyon
function selamla(isim) {
    return "Merhaba " + isim;
}

// Arrow function (ES6)
const selamla = (isim) => `Merhaba ${isim}`;
```

### Koşullar:
```javascript
if (yas >= 18) {
    console.log("Reşit!");
} else {
    console.log("Değil!");
}

// Ternary
let durum = yas >= 18 ? "Reşit" : "Değil";
```

### Döngüler:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const meyveler = ["elma", "armut"];
meyveler.forEach(m => console.log(m));
```

### DOM Manipülasyonu:
```javascript
const baslik = document.getElementById("baslik");
baslik.textContent = "Yeni Başlık!";
baslik.style.color = "red";
baslik.classList.add("aktif");

// Event Listener
document.querySelector("#buton")
    .addEventListener("click", () => {
        alert("Tıkladın!");
    });
```

### Array Metodları:
```javascript
const sayilar = [1, 2, 3, 4, 5];

sayilar.filter(s => s > 3);  // [4, 5]
sayilar.map(s => s * 2);     // [2, 4, 6, 8, 10]
sayilar.find(s => s === 3);  // 3
sayilar.includes(3);          // true
```

### Fetch API:
```javascript
const veriGetir = async () => {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Hata:", error);
    }
}
```

---

## 🔑 Console Metodları (Loglama)

```javascript
console.log()   // ⚪ Normal mesaj
console.error() // 🔴 Hata mesajı
console.warn()  // 🟡 Uyarı mesajı
console.info()  // 🔵 Bilgi mesajı
console.table() // 📊 Tablo göster
console.time()  // ⏱️ Süre ölç
console.clear() // Temizle
```

---

## 🔑 ES5 vs ES6 Farkları

| ES5 (Eski) | ES6 (Yeni) |
|------------|------------|
| `var` | `let / const` |
| `function(){}` | `() => {}` |
| `"a" + b` | `` `a ${b}` `` |
| `prototype` | `class` |
| `require` | `import/export` |

---

## 🔑 TypeScript Nedir?

TypeScript = JavaScript + **Tip Sistemi**

```typescript
// JavaScript - Tip yok
let sayi = 5;
sayi = "merhaba"; // Hata vermez! 😱

// TypeScript - Tip var
let sayi: number = 5;
sayi = "merhaba"; // HATA VERİR! ✅

// Temel Tipler
let isim: string = "Emir";
let yas: number = 22;
let aktif: boolean = true;
let dizi: number[] = [1, 2, 3];

// Interface
interface Kullanici {
    isim: string;
    yas: number;
}

// Fonksiyon Tipi
function topla(a: number, b: number): number {
    return a + b;
}
```

### TSC Nedir?
```bash
# TypeScript Compiler = Derleyici
# TypeScript → JavaScript'e çevirir

npm install -g typescript  # Kur
tsc app.ts                 # Derle
tsc app.ts --watch         # Otomatik derle
```

---

## 📋 Özet

```
JavaScript → Web'i interaktif yapar
ES6        → Modern JS özellikleri
TypeScript → JS + Tip sistemi
TSC        → TypeScript derleyicisi

Console metodları:
log, error, warn, info, table, time
```