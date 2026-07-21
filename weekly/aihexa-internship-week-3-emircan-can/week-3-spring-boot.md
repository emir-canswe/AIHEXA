# 🌱 Spring Boot Temelleri ve Backend Mantığı

**Öğrenci:** Emircan Can  
**Staj Yeri:** AIHEXA  
**Tarih:** Temmuz 2026  
**Konu:** Spring Boot, Backend, REST API

---

## 1️⃣ Backend Nedir?

Kullanıcının göremediği ama tüm işlemlerin yapıldığı katmandır.

```
Frontend  → Kullanıcı görür (React, HTML)
Backend   → İşlemler yapılır (Spring Boot)
Database  → Veriler saklanır (PostgreSQL)
```

**Gerçek hayat örneği:**
> Instagram'da fotoğraf yüklersin (Frontend) → Backend fotoğrafı alır → Database'e kaydeder → "Yüklendi!" der (Frontend)

---

## 2️⃣ Spring Boot Nedir?

Java ile backend geliştirmek için kullanılan en popüler framework'tür.

```
Spring Boot = Java + Hazır Araç Seti

Kullanım alanları:
→ REST API yazmak
→ Veritabanı bağlantısı
→ Güvenlik yönetimi
→ Mikroservis mimarisi
```

**Kullanan büyük şirketler:**
- Netflix
- Amazon
- LinkedIn
- SAP

---

## 3️⃣ Spring Boot Katmanları

```
İstek gelir (HTTP Request)
        ↓
CONTROLLER → İsteği karşılar
        ↓
SERVICE    → İş mantığını yürütür
        ↓
REPOSITORY → Veritabanı ile konuşur
        ↓
DATABASE   → Veriyi saklar
        ↓
RESPONSE   → Kullanıcıya döner
```

---

## 4️⃣ Controller Nedir?

Gelen HTTP isteklerini karşılayan katmandır. Kapıdaki görevli gibi düşünülebilir.

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    // GET - Tüm kullanıcıları getir
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // POST - Yeni kullanıcı ekle
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // PUT - Güncelle
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id,
                           @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    // DELETE - Sil
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
```

---

## 5️⃣ Service Nedir?

İş mantığının uygulandığı katmandır. Mutfak gibi düşünülebilir.

```java
@Service
public class UserService {

    private final UserRepository userRepository;

    public User createUser(User user) {

        // Email boş mu kontrol et
        if (user.getEmail() == null) {
            throw new RuntimeException("Email boş olamaz!");
        }

        // Email kayıtlı mı kontrol et
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email zaten kayıtlı!");
        }

        // Kaydet ve döndür
        return userRepository.save(user);
    }
}
```

**Controller vs Service farkı:**

| Controller | Service |
|------------|---------|
| İsteği karşılar | İş kurallarını uygular |
| URL'leri dinler | Validasyon yapar |
| Service'e gönderir | Repository'e gönderir |

---

## 6️⃣ Repository Nedir?

Veritabanı ile doğrudan konuşan katmandır. Depo görevlisi gibi düşünülebilir.

```java
@Repository
public interface UserRepository
    extends JpaRepository<User, Long> {

    // JPA hazır metodlar:
    // findAll()      → Hepsini getir
    // findById(id)   → ID'ye göre getir
    // save(user)     → Kaydet/Güncelle
    // deleteById(id) → Sil

    // Özel metodlar:
    User findByEmail(String email);
    boolean existsByEmail(String email);
}
```

---

## 7️⃣ Entity Nedir?

Veritabanı tablosunu temsil eden Java sınıfıdır.

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private boolean active = true;
}
```

**Veritabanında şöyle görünür:**

| id | firstName | lastName | email | active |
|----|-----------|----------|-------|--------|
| 1 | Emir | Can | emir@mail.com | true |
| 2 | Ayşe | Yılmaz | ayse@mail.com | true |

---

## 8️⃣ DTO Nedir?

DTO = **D**ata **T**ransfer **O**bject

Kullanıcıdan gelen veya kullanıcıya giden veri şablonudur.

```
Entity (DB'deki tüm alanlar):     DTO (Kullanıcıya gösterilen):
→ id                              → id
→ firstName                       → firstName
→ lastName                        → lastName
→ email                           → email
→ password  ← Dışarı çıkmamalı!  → (password YOK!) ✅
→ active
```

```java
// Request DTO - Kullanıcıdan gelen
public class UserRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}

// Response DTO - Kullanıcıya giden
public class UserResponseDTO {
    private Long id;
    private String firstName;
    private String email;
    // password YOK! ✅
}
```

---

## 9️⃣ JPA & Hibernate Nedir?

**JPA** = Java Persistence API → Java ile veritabanı arasındaki standarttır.

**Hibernate** = JPA'nın en popüler uygulamasıdır.

```
JPA       = Trafik kuralları 📋
Hibernate = Sürücü 🚗
```

```java
// Sen şunu yazarsın:
userRepository.findAll();

// JPA/Hibernate SQL'e çevirir:
// SELECT * FROM users;

// Sen şunu yazarsın:
userRepository.findByEmail("emir@mail.com");

// JPA/Hibernate SQL'e çevirir:
// SELECT * FROM users WHERE email = 'emir@mail.com';
```

**JPA Annotasyonları:**

| Annotasyon | Açıklama |
|------------|----------|
| `@Entity` | DB tablosudur |
| `@Table` | Tablo adı |
| `@Id` | Primary key |
| `@GeneratedValue` | Otomatik ID |
| `@Column` | Sütun ayarları |
| `@OneToMany` | Bire çok ilişki |

---

## 🔟 Maven & pom.xml Nedir?

**Maven** = Java projelerinin paket yöneticisidir. (npm gibi!)

**pom.xml** = Maven'ın yapılandırma dosyasıdır. (package.json gibi!)

```xml
<project>
    <groupId>com.aihexa</groupId>
    <artifactId>aihexa-app</artifactId>
    <version>1.0.0</version>

    <dependencies>
        <!-- Spring Boot Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Spring Boot JPA -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <!-- PostgreSQL -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
        </dependency>
    </dependencies>
</project>
```

**npm vs Maven karşılaştırması:**

| npm | Maven |
|-----|-------|
| package.json | pom.xml |
| npm install | mvn install |
| npm start | mvn spring-boot:run |
| node_modules | .m2 |

---

## 1️⃣1️⃣ application.properties & application.yml

Spring Boot projesinin ayar dosyasıdır. (.env gibi!)

```properties
# application.properties
server.port=8080

spring.datasource.url=jdbc:postgresql://localhost:5432/aihexa
spring.datasource.username=admin
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.application.name=aihexa-app
```

```yaml
# application.yml (aynı ayarlar, farklı format)
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/aihexa
    username: admin
    password: ${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

> ⚠️ **Önemli:** Şifreyi direkt yazma! Environment variable kullan!

---

## 1️⃣2️⃣ HTTP Status Kodları

| Kod | Açıklama | Kullanım |
|-----|----------|----------|
| 200 | OK | GET başarılı |
| 201 | Created | POST başarılı |
| 204 | No Content | DELETE başarılı |
| 400 | Bad Request | Hatalı istek |
| 401 | Unauthorized | Giriş gerekli |
| 403 | Forbidden | Yetkisiz erişim |
| 404 | Not Found | Bulunamadı |
| 409 | Conflict | Çakışma |
| 500 | Internal Server Error | Sunucu hatası |

```java
// Spring Boot'ta kullanımı:
return ResponseEntity.status(201).body(response); // 201 Created
return ResponseEntity.ok(response);               // 200 OK
return ResponseEntity.status(404).build();        // 404 Not Found
```

---

## 1️⃣3️⃣ Stack Trace & Backend Hata Okuma

Stack Trace, hatanın nereden geldiğini gösteren izdir.

```
java.lang.NullPointerException:
Cannot invoke method getEmail()

    at UserService.createUser(UserService.java:45)      ← Hata burada!
    at UserController.createUser(UserController.java:23) ← Buradan çağrıldı
```

**Nasıl okunur?**
1. En üstteki satırı oku → Hata türü nedir?
2. "at" satırlarına bak → Hangi dosya, hangi satır?
3. Kendi kodunu bul → `com.aihexa` ile başlayanlar!
4. O satıra git ve düzelt!

**Yaygın hata türleri:**

| Hata | Açıklama |
|------|----------|
| NullPointerException | Null değer kullanıldı |
| EntityNotFoundException | DB'de bulunamadı |
| ClassCastException | Yanlış tip dönüşümü |
| IllegalArgumentException | Geçersiz parametre |

---

## 1️⃣4️⃣ Kullanıcı Kayıt Akışı

```
React Form → JSON → Controller → Service → Repository → DB → Response → Frontend
```

### Adım Adım:

**1. Kullanıcı formu doldurur:**
```
Ad: Emir
Email: emir@mail.com
Şifre: 1234
```

**2. Frontend JSON'a çevirir:**
```json
{
    "firstName": "Emir",
    "email": "emir@mail.com",
    "password": "1234"
}
```

**3. POST /api/users isteği gönderilir**

**4. Controller isteği alır ve Service'e gönderir**

**5. Service kontrol eder:**
- Email boş mu?
- Email zaten kayıtlı mı?
- Şifre yeterli uzunlukta mı?

**6. Repository DB'ye kaydeder:**
```sql
INSERT INTO users (first_name, email, password)
VALUES ('Emir', 'emir@mail.com', '****');
```

**7. Başarılı response:**
```json
{
    "id": 1,
    "firstName": "Emir",
    "email": "emir@mail.com",
    "message": "Kayıt başarıyla tamamlandı!"
}
```

**8. Hata response:**
```json
{
    "status": 409,
    "error": "Conflict",
    "message": "Bu email zaten kayıtlı!"
}
```

**9. Frontend mesaj gösterir:**
```
Başarılı → "Kayıt başarıyla tamamlandı! ✅"
Hatalı   → "Bu email zaten kayıtlı! ❌"
```

---

## 1️⃣5️⃣ AIHEXA Projesinde Spring Boot Nerede Kullanılır?

AIHEXA bir yazılım ve eğitim şirketidir. Spring Boot aşağıdaki modüllerde kullanılabilir:

| Modül | API Endpoint Örnekleri |
|-------|----------------------|
| Kullanıcı Yönetimi | POST /api/users, GET /api/users/{id} |
| Eğitim Modülü | GET /api/courses, POST /api/enrollments |
| Randevu Sistemi | POST /api/appointments, PUT /api/appointments/{id} |
| Blog Modülü | GET /api/blogs, POST /api/blogs |
| SMS & Email | POST /api/notifications/sms |

**Örnek senaryo:**
> AIHEXA'ya eğitim başvurusu yapan bir kullanıcı, React formu doldurur → Spring Boot Controller isteği alır → Service validasyon yapar → Repository PostgreSQL'e kaydeder → Kullanıcıya onay emaili gönderilir.

---

## 📋 Genel Özet

| Kavram | Açıklama |
|--------|----------|
| Backend | İşlemlerin yapıldığı katman |
| Spring Boot | Java backend framework'ü |
| Controller | HTTP isteklerini karşılar |
| Service | İş mantığını yürütür |
| Repository | DB ile konuşur |
| Entity | DB tablosunu temsil eder |
| DTO | Veri transfer nesnesi |
| JPA | Java-DB köprüsü |
| Hibernate | JPA'nın uygulaması |
| Maven | Java paket yöneticisi |
| pom.xml | Proje ayar dosyası |
| application.properties | Uygulama ayarları |

---

*Emircan Can | AIHEXA Staj | Temmuz 2026*