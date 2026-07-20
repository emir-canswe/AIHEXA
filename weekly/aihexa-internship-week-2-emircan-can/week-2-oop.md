# 📌 OOP - Nesne Yönelimli Programlama

**Emircan Can | AIHEXA Staj Notları**

---

## 🔑 OOP Nedir?

OOP = **Object Oriented Programming** = Nesne Yönelimli Programlama

Gerçek hayatı koda yansıtma yöntemidir.

```javascript
class Araba {
    constructor(marka, renk) {
        this.marka = marka;
        this.renk = renk;
    }
    calis() {
        console.log(this.marka + " çalıştı!");
    }
}

const araba = new Araba("Toyota", "Kırmızı");
araba.calis(); // Toyota çalıştı!
```

---

## 🔑 4 Temel Prensip

### 1. Encapsulation (Kapsülleme)
Veriyi ve metotları bir arada saklamak, dışarıdan erişimi kısıtlamak.

```javascript
class BankaHesabi {
    #bakiye = 0; // Private!

    paraYatir(miktar) {
        this.#bakiye += miktar;
    }

    bakiyeGoster() {
        return this.#bakiye;
    }
}

const hesap = new BankaHesabi();
hesap.paraYatir(1000);
// hesap.#bakiye → HATA! Erişilemiez! ✅
```

### 2. Inheritance (Kalıtım)
Bir class başka class'tan özellik alır.

```javascript
class Hayvan {
    constructor(isim) { this.isim = isim; }
    sesCikar() { console.log("Ses..."); }
}

class Kopek extends Hayvan {
    sesCikar() {
        console.log(this.isim + ": Hav!");
    }
}

const kopek = new Kopek("Karabaş");
kopek.sesCikar(); // Karabaş: Hav!
```

### 3. Polymorphism (Çok Biçimlilik)
Aynı metot farklı davranışlar gösterir.

```javascript
class Kare extends Sekil {
    ciz() { console.log("Kare ⬜"); }
}
class Daire extends Sekil {
    ciz() { console.log("Daire ⭕"); }
}

[new Kare(), new Daire()].forEach(s => s.ciz());
```

### 4. Abstraction (Soyutlama)
Karmaşık detayları gizle, sadece gerekli olanı göster.

```javascript
class Veritabani {
    #baglan() { /* gizli */ }
    #sorgu(sql) { /* gizli */ }

    kullanicilariGetir() {
        this.#baglan();
        this.#sorgu("SELECT * FROM users");
    }
}
```

---

## 🔑 Generic Type (TypeScript)

```typescript
// <T> = Esnek tip!
class PageObject<T> {
    constructor(private root: T) {}

    async back(): Promise<T> {
        return this.root;
    }
}
```

---

## 🔑 Super Nedir?

```typescript
class BasePage {
    constructor(public page: Page) {}
}

class ArticlePage extends BasePage {
    constructor(page: Page) {
        super(page); // ← BasePage'i başlat!
        // Artık this.page kullanılabilir!
    }
}
```

---

## 📋 Özet

```
Encapsulation → Veriyi gizle/koru
Inheritance   → Özelliği miras al
Polymorphism  → Aynı isim farklı davranış
Abstraction   → Detayları gizle
Generic <T>   → Esnek tip sistemi
super()       → Ana sınıfı başlat
```