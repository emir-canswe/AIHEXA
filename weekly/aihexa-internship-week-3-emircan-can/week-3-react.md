# ⚛️ React Temelleri ve Frontend Mantığı

**Öğrenci:** Emircan Can  
**Staj Yeri:** AIHEXA  
**Tarih:** Temmuz 2026  
**Konu:** React, Frontend, Component, JSX, Props, State, useEffect, Form Yönetimi

---

## 1️⃣ React Nedir?

React, Facebook tarafından 2013 yılında geliştirilen ve günümüzde dünyanın en popüler frontend kütüphanesi haline gelen bir JavaScript kütüphanesidir.

Normal JavaScript ile web sayfası geliştirirken her değişiklikte DOM'u manuel olarak güncellememiz gerekir. Bu durum büyük projelerde kodun karmaşık ve yönetilmesi zor hale gelmesine yol açar. React ise bu sorunu **component bazlı geliştirme** anlayışıyla çözer. Bir veri değiştiğinde React, sayfanın yalnızca değişen kısmını otomatik olarak günceller. Bu sayede hem performans artar hem de kod çok daha düzenli olur.

**AIHEXA projesinde React şu alanlarda kullanılabilir:**
- Eğitim başvuru formu
- Kurs listeleme sayfası
- Kullanıcı giriş ve kayıt ekranı
- Admin yönetim paneli
- Blog içerik sayfaları

---

## 2️⃣ Frontend Nedir?

Frontend, bir web uygulamasında kullanıcının doğrudan gördüğü ve etkileşime girdiği katmandır. Butonlar, formlar, menüler, renk düzeni ve genel görünüm frontend'in kapsamındadır.

```
Frontend  → Kullanıcı görür (React, HTML, CSS)
Backend   → İşlemler yapılır (Spring Boot)
Database  → Veriler saklanır (PostgreSQL)
```

Bir web projesinde frontend olmadan kullanıcı hiçbir şeyi göremez. Backend olmadan ise veriler işlenemez. Bu iki katman birlikte çalışarak tam işlevli bir uygulama oluşturur.

---

## 3️⃣ Component Nedir?

Component, React'ın en temel yapı taşıdır. Sayfayı küçük, bağımsız ve yeniden kullanılabilir parçalara bölme yöntemidir.

Bunu bir Lego setine benzetebiliriz. Her Lego parçası bağımsız olarak üretilir fakat bir araya geldiğinde bütün bir yapı oluşturur. React'ta da Navbar, Button, Card, Footer gibi her parça ayrı ayrı component olarak yazılır ve sonunda App component'i içinde bir araya getirilir.

**Component'in avantajları:**
- Aynı component birden fazla yerde kullanılabilir
- Her component kendi işini yapar, başkasına karışmaz
- Hata oluştuğunda sadece o component'e bakılır
- Büyük projeler daha kolay yönetilir

**Component kuralları:**
- Component isimlerinin ilk harfi büyük olmalıdır (`Navbar`, `Button`)
- Her component tek bir iş yapmalıdır
- Yeniden kullanılabilir olacak şekilde tasarlanmalıdır

---

## 4️⃣ JSX Nedir?

JSX, JavaScript ile HTML'i aynı dosyada birlikte yazmamızı sağlayan bir söz dizimidir. Tam açılımı JavaScript XML'dir.

Normal JavaScript'te bir HTML elementi oluşturmak için `document.createElement()` gibi uzun ve karmaşık kodlar yazmak gerekir. JSX sayesinde bunu çok daha sade ve okunabilir bir şekilde yapabiliriz.

**JSX'in önemli kuralları:**
- Her component tek bir kök element döndürmelidir
- HTML'deki `class` yerine `className` kullanılır
- JavaScript ifadeleri `{}` süslü parantez içinde yazılır
- Koşullu gösterim için ternary operatör kullanılır

**Örnek:**
```jsx
function Karsilama() {
    const isim = "Emir";
    return (
        <div>
            <h1>Merhaba {isim}!</h1>
            <p>AIHEXA'ya hoş geldin.</p>
        </div>
    );
}
```

---

## 5️⃣ Props Nedir?

Props, bir component'e dışarıdan veri göndermek için kullanılan mekanizmadır. Tam adı Properties yani özellikler anlamına gelir.

Bunu bir fonksiyonun parametrelerine benzetebiliriz. Nasıl ki bir fonksiyona farklı değerler göndererek farklı sonuçlar alıyorsak, bir component'e farklı props göndererek farklı içerikler gösterebiliriz.

**Props'un temel özellikleri:**
- Veri her zaman üst componentten alt componente doğru akar (tek yönlü)
- Props salt okunurdur, alt component props'u değiştiremez
- Farklı props göndererek aynı component'i farklı şekillerde kullanabiliriz

**Örnek:**
```jsx
// Aynı component, farklı props ile farklı içerik gösterir
<KullaniciKarti isim="Emir" meslek="Stajyer" />
<KullaniciKarti isim="Ayşe" meslek="Developer" />
```

---

## 6️⃣ State ve useState Nedir?

State, bir component'in kendi içinde tuttuğu ve zamanla değişebilen veridir. State değiştiğinde React o component'i otomatik olarak yeniden render eder yani günceller.

Props ile State arasındaki temel fark şudur: Props dışarıdan gelir ve değiştirilemez. State ise içeriden gelir ve değiştirilebilir.

`useState` ise React'ın bize sağladığı ve state yönetimini kolaylaştıran bir hook'tur.

**useState iki şey döndürür:**
1. State'in mevcut değeri
2. State'i değiştirmek için kullanılan fonksiyon

**Kullanım alanları:**
- Form alanlarındaki değerleri takip etmek
- Yükleniyor durumunu yönetmek
- Hata mesajlarını göstermek veya gizlemek
- Sayaç, toggle gibi değişken verileri tutmak

**Props vs State karşılaştırması:**

| Özellik | Props | State |
|---------|-------|-------|
| Nereden gelir? | Dışarıdan (Parent) | İçeriden (Component) |
| Değiştirilebilir mi? | Hayır | Evet |
| Kim yönetir? | Parent component | Component kendisi |

---

## 7️⃣ useEffect Nedir?

useEffect, component yüklendiğinde, güncellendiğinde veya kaldırıldığında belirli işlemleri gerçekleştirmek için kullanılan bir hook'tur.

En yaygın kullanım senaryosu sayfa ilk açıldığında API'den veri çekmektir. Bunun dışında zamanlayıcı başlatmak, event listener eklemek veya sayfa başlığını değiştirmek gibi işlemler için de kullanılır.

**useEffect ne zaman çalışır?**

| Dependency Array | Ne zaman çalışır? |
|-----------------|-------------------|
| `[]` boş dizi | Sadece 1 kere, sayfa açılınca |
| `[sayi]` değişken | `sayi` her değiştiğinde |
| Hiçbir şey yok | Her render'da |

**AIHEXA'da useEffect kullanımı:**
- Sayfa açılınca eğitim listesini API'den çekmek
- Kullanıcı bilgilerini yüklemek
- Blog yazılarını getirmek

---

## 8️⃣ Form Yönetimi Nedir?

React'ta form yönetimi, kullanıcıdan alınan verilerin state ile takip edilmesi ve gönderilmeden önce doğrulanması sürecidir.

**Form yönetiminin adımları:**
1. Her input alanı için ayrı bir state tanımlanır
2. Kullanıcı yazdıkça `onChange` ile state güncellenir
3. Form gönderildiğinde `onSubmit` tetiklenir
4. `e.preventDefault()` ile sayfanın yenilenmesi engellenir
5. Validasyon yapılır, eksik veya hatalı alanlar kontrol edilir
6. Her şey tamam ise API'ye veri gönderilir
7. Kullanıcıya başarı veya hata mesajı gösterilir

**Validasyon kuralları (AIHEXA için):**
- Ad ve soyad boş olamaz
- Email geçerli formatta olmalıdır
- Telefon numarası boş olamaz
- KVKK onayı yapılmadan form gönderilemez

---

## 9️⃣ AIHEXA Eğitim Başvuru Formu

AIHEXA'ya eğitim başvurusu yapmak isteyen kullanıcılar için tasarlanacak form aşağıdaki alanları içermelidir.

**Form alanları:**

| Alan | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| Ad | Metin | ✅ | Kullanıcının adı |
| Soyad | Metin | ✅ | Kullanıcının soyadı |
| Email | Email | ✅ | Geçerli email formatı |
| Telefon | Metin | ✅ | İletişim numarası |
| Eğitim Seçimi | Açılır menü | ✅ | Java, React, vb. |
| Eğitim Seviyesi | Açılır menü | ✅ | Başlangıç, Orta, İleri |
| Açıklama | Büyük metin | ❌ | Ek notlar |
| KVKK Onayı | Onay kutusu | ✅ | Zorunlu onay |

**Backend'e gönderilecek JSON örneği:**
```json
{
    "firstName": "Emir",
    "lastName": "Can",
    "email": "emir@mail.com",
    "phone": "05524813948",
    "educationName": "Java Full Stack Eğitimi",
    "level": "Başlangıç",
    "description": "Eğitim hakkında bilgi almak istiyorum.",
    "kvkkApproved": true
}
```

**Kullanıcı akışı:**
```
1. Kullanıcı başvuru sayfasını açar
2. Form alanlarını doldurur
3. KVKK onayını işaretler
4. Başvur butonuna basar
5. Frontend veriyi JSON formatına çevirir
6. Backend API'ye POST isteği gönderir
7. Backend başarılı dönerse → "Başvurunuz alındı! ✅"
8. Backend hata dönerse → "Hata mesajı gösterilir ❌"
```

---

## 🔟 localStorage Nedir?

localStorage, tarayıcının belleğinde veri saklamak için kullanılan bir mekanizmadır. Sayfa kapansa bile veriler silinmez ve bir sonraki açılışta hâlâ erişilebilir olur.

**localStorage ne zaman kullanılır?**
- Kullanıcının giriş token'ını saklamak
- Kullanıcının oturum açık kalmasını sağlamak
- Dil tercihini saklamak
- Tema tercihini (açık/koyu) saklamak

**localStorage'ın sınırlılıkları:**
- Yalnızca metin veri saklar, obje saklamak için JSON'a çevirmek gerekir
- Tarayıcıya özgüdür, farklı cihazlarda paylaşılamaz
- Güvenlik açısından hassas veriler (şifre, kredi kartı) saklanmamalıdır

---

## 1️⃣1️⃣ API'den Veri Çekme

React'ta API'den veri çekmek için genellikle `fetch` veya `axios` kütüphanesi kullanılır. Bu işlem çoğunlukla `useEffect` içinde yapılır.

**API'den veri çekme adımları:**
1. `useEffect` içinde async fonksiyon tanımlanır
2. `fetch` ile API'ye GET isteği gönderilir
3. Gelen yanıt JSON formatına çevrilir
4. Veri state'e kaydedilir
5. Hata oluşursa hata mesajı state'e kaydedilir
6. Yükleniyor durumu güncellenir

**Olası durumlar:**
- **Yükleniyor:** Veri henüz gelmedi, kullanıcıya spinner gösterilir
- **Başarılı:** Veri geldi, liste gösterilir
- **Hatalı:** API'den hata döndü, hata mesajı gösterilir

---

## 1️⃣2️⃣ AIHEXA Projesinde React Nerede Kullanılır?

| Modül | React Kullanımı |
|-------|----------------|
| Eğitim Başvuru | Form yönetimi, validasyon, API gönderme |
| Kurs Listeleme | API'den veri çekme, filtreleme |
| Kullanıcı Girişi | Form, token saklama, yönlendirme |
| Admin Paneli | Tablo, CRUD işlemleri |
| Blog Modülü | İçerik listeleme, detay sayfası |
| Randevu Sistemi | Takvim, form, API entegrasyonu |

---

## 📋 Genel Özet

| Kavram | Açıklama |
|--------|----------|
| React | Facebook'un JavaScript UI kütüphanesi |
| Component | Yeniden kullanılabilir parça |
| JSX | JavaScript + HTML söz dizimi |
| Props | Dışarıdan gelen salt okunur veri |
| State | Component'in kendi değişken verisi |
| useState | State yönetimi hook'u |
| useEffect | Yan etki yönetimi hook'u |
| Form Yönetimi | Kullanıcıdan veri alma ve doğrulama |
| localStorage | Tarayıcıda kalıcı veri saklama |
| API Fetch | Backend'den veri çekme |

---

*Emircan Can | AIHEXA Staj | Temmuz 2026*