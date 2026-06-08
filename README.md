# FitPower Gym - Spor Salonu Web Sitesi
https://github.com/cankoroot/ileriweb-proje

## Proje Açıklaması

FitPower Gym, modern ve responsive tasarımı ile spor salonunun tüm hizmetlerini sunabilen profesyonel bir web sitesidir. Üyeler bu site üzerinden üyelik paketlerini seçebilir, antrenman programlarını görebilir, antrenörlerle randevu alabilir ve daha birçok özellikten yararlanabilirler.

## Proje Özellikleri

### Temel Özellikler
**5+ HTML Sayfa**: Ana sayfa, Programlar, Antrenörler, Üyelik, İletişim
**Responsive Tasarım**: Mobil, tablet ve desktop uyumlu
**Modern UI/UX**: Gradient renkler, smooth geçişler, hover efektleri
**Mobil Menü**: Hamburger menüsü ile mobil uyumluluğu sağlanmış
**Form Doğrulama**: Tüm formlarda client-side doğrulama

### JavaScript Etkileşimleri
1. **Mobil Menü Toggle**: Responsive menü açma/kapama
2. **Modal Popup Sistemi**: Programlar ve antrenörlerin detaylı bilgileri için modal
3. **Sepet Yönetimi**: Üyelik paketlerini sepete ekleme/çıkarma
4. **Form Doğrulaması**: Email, telefon, yaş vb. validasyon
5. **Favoriler Sistemi**: Program ve antrenörleri favori olarak işaretleme
6. **Filtreleme Sistemi**: Programları kategorilere göre filtreleme

### LocalStorage Kullanımı
Sepet verileri (Gym Cart)
Favoriler listesi (Gym Favorites)
Üyelik başvuruları (Gym Memberships)
Randevu rezervasyonları (Gym Appointments)
İletişim mesajları (Gym Contact Messages)

## Sayfa Açıklamaları

### 1. **index.html** - Ana Sayfa
Gym'in tanıtım ve hero section
Neden biz bölümü
Üyelik paketleri özeti
CTA (Call to Action) butonları

### 2. **programs.html** - Antrenman Programları
- 8 farklı antrenman programı
- Kategori filtreleme (Tümü, Kardiyo, Kuvvet, Esneklik)
- Modal popup ile detaylı program bilgileri
- Program süresi, zorluk ve açıklaması

### 3. **trainers.html** - Antrenörler
- 6 antrenör profili
- Antrenör deneyimi, puanı ve tamamlanan ders sayısı
- Antrenörlerle randevu alma formu
- Form doğrulaması ve LocalStorage'a kaydetme

### 4. **membership.html** - Üyelik Sayfası
- Kapsamlı üyelik başvuru formu
- Form doğrulaması (Ad Soyad, Email, Telefon, Yaş, Paket)
- Sepet sistemi
- Şartlar ve Koşullar onayı
- Başarılı kayıt mesajı

### 5. **contact.html** - İletişim
- İletişim bilgileri (Adres, Telefon, Email, Çalışma Saatleri)
- İletişim formu (Ad, Email, Konu, Mesaj)
- Form doğrulaması
- Mesaj gönderme işlevselliği

## Teknolojiler

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Responsive Grid & Flexbox, CSS Variables, Media Queries
- **JavaScript**: 
  - LocalStorage API
  - Event Listeners
  - DOM Manipulation
  - Form Validation

### Kullanılan Araçlar
- VS Code (Editor)
- Git/GitHub (Versiyon Kontrolü)

## LocalStorage Yapısı

```javascript
// Sepet
localStorage.gymCart = [{id, name, price}]

// Favoriler
localStorage.gymFavorites = [{id, name}]

// Üyelik Başvuruları
localStorage.gymMemberships = [{id, fullname, email, phone, age, package, registeredAt, status}]

// Randevular
localStorage.gymAppointments = [{id, trainerId, trainerName, name, email, date, bookedAt}]

// İletişim Mesajları
localStorage.gymContactMessages = [{id, name, email, subject, message, sentAt}]
```

## JavaScript Fonksiyonları

### main.js
- `addToCart()` - Sepete ürün ekleme
- `removeFromCart()` - Sepetten ürün çıkarma
- `clearCart()` - Sepeti temizleme
- `toggleFavorite()` - Favoriye ekleme/çıkarma
- `saveToLocalStorage()` - LocalStorage'a kaydetme
- `getFromLocalStorage()` - LocalStorage'dan okuma
- `validateEmail()` - Email doğrulama
- `validatePhone()` - Telefon doğrulama

### programs.js
- `displayPrograms()` - Programları listele
- `filterPrograms()` - Programları kategorilere göre filtrele
- `showProgramDetails()` - Program detaylarını modal'da göster

### trainers.js
- `displayTrainers()` - Antrenörleri listele
- `showTrainerDetails()` - Antrenör detaylarını modal'da göster
- `bookAppointment()` - Randevu alma

### membership.js
- `submitMembership()` - Üyelik formunu gönder

### contact.js
- `submitContact()` - İletişim formunu gönder

## Tarayıcı Uyumluluğu

Chrome
Firefox
Safari
Edge
Mobil Tarayıcılar

## Özellik Tanımlamaları

### Kod Kalitesi
- Modüler JavaScript yapısı
- DRY (Don't Repeat Yourself) prensipleri
- Anlaşılır değişken ve fonksiyon adları
- Yeterli comments ve açıklamalar

### Responsive Design
- Mobile-first approach
- Flexible grid sistemi
- Responsive images ve typography
- Touch-friendly buttons ve inputs

### User Experience
- Smooth transitions ve animations
- Clear error messages
- Success feedback
- Accessible color contrast
- Intuitive navigation

## Geliştirme Fikirleri

Gelecekteki geliştirmeler için fikirler:
- Backend database bağlantısı
- User authentication sistemi
- Ödeme entegrasyonu
- Email bildirimleri
- Admin dashboard
- Dinamik sınıf programları
- Üyelerin kişisel profilleri

## Lisans

Bu proje eğitim amaçlı olarak oluşturulmuştur.

## İletişim

**FitPower Gym**
- 📍 Çukurova, Adana
- 📞 0212 123 45 67 (fake)
- ✉️ info@fitpowergym.com (fake)

---

**Son Güncellenme**: 10 Haziran 2026
**Versiyon**: 1.0
