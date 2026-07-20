# Git & GitHub Araştırması
**Emircan Can · 3. Hafta Pazartesi**

---

## Git Nedir?
Git, yazılım projelerinde yapılan değişiklikleri takip eden bir versiyon kontrol sistemidir.
Yani bir dosyada ne zaman, ne değişti, kim değiştirdi gibi soruların cevabını tutar.
Örneğin bir projede hata yaptığında Git sayesinde önceki sürüme kolayca dönebilirsin.

AIHEXA projesinde Git; backend, frontend ve WordPress kodlarının
tüm geçmişini tutmak ve ekip içinde düzenli çalışmak için kullanılır.

---

## GitHub Nedir?
GitHub, Git ile yönetilen projelerin internet üzerinde saklandığı ve
ekip arkadaşlarıyla paylaşıldığı bir platformdur.
Git'i bir günlük defteri gibi düşünürsen, GitHub o defterin bulut yedağıdır.

AIHEXA projesinde GitHub; stajyerlerin çalışmalarını yükleyip
hocaların inceleyebildiği merkezi bir alan olarak kullanılır.

---

## Repository Nedir?
Repository (repo), bir projenin tüm dosyalarının ve geçmişinin tutulduğu klasördür.
Her proje için ayrı bir repository açılır.

Örnek: `aihexa-internship-week-3-4-emircan-can` bu staj sürecinin repository'sidir.

---

## Commit Nedir?
Commit, yapılan değişiklikleri bir mesajla birlikte kayıt altına almaktır.
Her commit "ne değişti ve neden" sorusuna cevap vermelidir.

**İyi commit mesajı örnekleri:**
- `README.md dosyası oluşturuldu`
- `Git araştırması tamamlandı`
- `Spring Boot katman açıklaması eklendi`

**Kötü commit mesajı örnekleri:**
- `düzenleme`
- `asdfgh`
- `değişiklik`

AIHEXA projesinde her dosya tamamlandığında commit atılmalıdır.
Bu sayede hangi gün ne yapıldığı net şekilde görülür.

---

## Branch Nedir?
Branch, projenin ana kodundan bağımsız olarak yeni bir özellik geliştirmek için
açılan ayrı bir çalışma dalıdır.
Ana kod bozulmadan yeni şeyler denenir, hazır olunca birleştirilir.

Örnek: AIHEXA projesinde `feature/egitim-basvuru-formu` adında bir branch açılıp
form geliştirilebilir. Hazır olunca `main` branch'e eklenir.

---

## Pull Request Nedir?
Pull Request (PR), bir branch'teki değişikliklerin ana koda eklenmesi için
yapılan resmi bir istektir.
Ekip arkadaşları bu isteği inceler, onaylarsa birleştirme yapılır.

AIHEXA gibi bir yazılım şirketinde bir stajyer yaptığı değişikliği
direkt main'e atmaz; PR açar ve senior geliştirici inceler.

---

## Merge Conflict Nedir?
İki kişi aynı dosyanın aynı satırını farklı şekilde değiştirdiğinde
Git hangisini alacağını bilemez, buna merge conflict denir.
Bu durumda çakışan kısımlar elle düzenlenerek çözülür.

Örnek: İki stajyer aynı anda README.md'yi düzenlerse conflict çıkabilir.

---

## .gitignore Nedir?
.gitignore, GitHub'a yüklenmesini istemediğimiz dosyaları listeleyen bir dosyadır.
Şifreler, API anahtarları, büyük log dosyaları gibi şeyler buraya yazılır.

Örnek .gitignore içeriği: