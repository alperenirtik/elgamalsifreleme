# ElGamal Şifreleme Aracı (HTML - JS)

Bu proje, ElGamal şifreleme algoritmasını kullanarak mesajları şifrelemek ve çözmek için bir arayüz sağlar. Kullanıcılar, p (asal sayı), g (ilkel kök), a (özel anahtar), m (mesaj) ve k (şifreleme anahtarı) gibi parametreleri girerek şifreleme işlemlerini gerçekleştirebilirler.

## ElGamal Şifreleme Algoritması

ElGamal şifreleme, genel ve özel anahtarlar kullanarak asimetrik şifreleme sağlayan bir algoritmadır. İşlem adımları şunlardır:

- **p (Asal Sayı):** Birinci büyük asal sayı. Algoritmanın ana modülü (modulus) olarak kullanılır.
- **g (İlkel Kök):** Modulo p üzerindeki bir ilkel kök. İlkel kök, tüm diğer sayıları mod p üzerinde oluşturabilen bir sayıdır.
- **x (Özel Anahtar):** Şifreleme ve şifre çözme işlemlerinde kullanılan gizli özel anahtar. 1 ile p-1 arasında bir değerdir.
- **m (Mesaj):** Şifrelemek istediğiniz asıl mesaj. 1 ile p-1 arasında bir değerdir.

### Anahtarları Oluştur

1. Kullanıcı, p ve g'yi seçer.
2. Kullanıcı bir özel anahtar x seçer ve A = g^x mod p hesaplanır. A, genel anahtar olacaktır.
3. Açık anahtar (pk) olarak (p, g, A) kullanıcıya verilir.

### Şifreleme

1. Bob, Alice'in açık anahtarını (p, g, A) ve r'yi kullanarak c1 = g^r mod p'yi hesaplar.
2. c2 = (m * A^r) mod p hesaplanarak şifreli mesaj elde edilir: (c1, c2).

### Şifreyi Çözme

1. Alice, özel anahtarı x kullanarak c1^x mod p'yi hesaplar ve bu değeri x^-1 ile çarpar.
2. Elde edilen değeri c2 ile çarparak orijinal mesajı elde eder.

ElGamal algoritması, güvenli iletişim ve dijital imza gibi kriptografik uygulamalarda geniş çapta kullanılmaktadır. Detaylı bilgi ve matematiksel işlemler için lütfen proje içeriğini ve script.js dosyasını inceleyin.

## Kullanım

1. **Anahtar Oluşturma**
   - p, g ve a değerlerini girin.
   - "Anahtarları Oluştur" düğmesine tıklayın.

2. **Şifreleme**
   - k ve m değerlerini girin.
   - "Şifrele" düğmesine tıklayın.

3. **Şifre Çözme**
   - Şifreli metin c1 ve c2 değerlerini girin.
   - "Şifreyi Çöz" düğmesine tıklayın.

## Proje Detayları

- **Geliştirici:** Alperen İRTİK
- **Kullanım Hakkı:** Herkese Açık
- **Kullanılan Diller:** HTML, CSS, JavaScript

## Nasıl Başlatılır

1. Depoyu bilgisayarınıza klonlayın veya ZIP olarak indirin.
2. `index.html` dosyasını bir tarayıcıda açarak uygulamayı başlatın.

## Katkıda Bulunma

- Hatalar veya öneriler için lütfen bir Issue açın.
- Kod katkısı yapmak isterseniz, bir Pull Request oluşturun.

---

**Not:** Bu proje eğitim ve öğrenim amacıyla geliştirilmiştir. Gerçek dünya uygulamalarında güvenlik için daha kapsamlı test ve doğrulama gerekebilir.

