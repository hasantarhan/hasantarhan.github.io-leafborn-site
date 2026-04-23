# Leafborn — Basın Kiti & Görsel Kimlik Rehberi

> Bu doküman basın kiti metnini ve web sitesi için görsel kimlik, renk paleti ve tipografi rehberini tek bir yerde toplar.

---

## 1. Kısa Tanım

Leafborn, binlerce yapraktan oluşan bir varlığı yönettiğimiz, uçan adalarda geçen 3D roguelite aksiyon-platformer oyunudur. Unity 6.3 LTS üzerinde geliştirilen oyun, akışkan hareket, kaotik parçacık estetiği ve koşu-bazlı ilerleme sistemlerini bir araya getirir.

**Platform:** Windows (Steam)
**Tür:** 3D Roguelite Aksiyon-Platformer
**Kamera:** Üçüncü şahıs
**Kontrol:** Gamepad odaklı

---

## 2. Konsept

Oyuncu, Yaşam Ağacı tarafından yaratılmış bir antikoru — binlerce yaprağın birleşiminden oluşan canlı bir humanoid varlığı — kontrol eder. Bu karakter statik bir model değil, her harekete, her saldırıya, her duraklamaya fiziksel olarak tepki veren akışkan bir yaprak bulutudur. Karakter idle'dayken yapraklar etrafında sarmal oluşturur, zıpladığında yığına dönüşür, saldırdığında patlayıp dağılır, sonra yeniden toplanır.

Dünya ise bulutların üzerinde yüzen, prosedürel olarak üretilmiş uçan adalardan oluşan bir takımadadır. Her biome farklı görsel tema ve düşman seti barındırır; adalar arasında zıplayıp süzülerek geçiş yapılır.

---

## 3. Oyuncu Fantezisi

"Huzur içinde tehlike." Leafborn, doğanın estetik gücünü somutlaştırır: canlı, yeşil, akışkan bir varlık olmanın hissi. Aynı anda, paslı makinelerin tehdidiyle yüzleşen bir savaşçı olmanın kontrol hissi. Temel duygular:

- **Akışkanlık** — Zıplama, dash, glide ve saldırı kesintisiz zincirlenir
- **Kaos Yönetimi** — Binlerce yaprağı bir bütün olarak yönlendirme hissi
- **Güç Fantazisi** — Yaprak yığınından ölümcül bir silaha dönüşme
- **İnteraktiflik** — Yapraklar fizikle etkileşir, rüzgara, darbeye, hıza tepki verir

---

## 4. Oynanış

### Çekirdek Hareket
Karakter hiçbir zaman durağan hissettirilmez. Zıplama, dash ve glide (uzun zıplamanın sonunda devreye giren süzülme modu) birbirine zincirlenir.

### Burst Saldırısı
Oyunun imza mekanizması. En yakın düşmana doğru tüm bedeniyle fırlar, içinden geçer, yapraklar patlayarak dağılır ve geri sarılır. Spam ile yeniden yönlendirilebilir — savaş akıcı bir dans hâline gelir.

### Form Sistemi
Yapraklar farklı şekillere bürünerek yetenekler üretir: kılıç, kalkan, girdap ve fazlası. Her form Hold, Tap veya Toggle aktivasyonuna sahiptir. 2 form slotu (RB/LB) eşzamanlı kullanılabilir. Form blueprint'leri oyun içindeki kasalardan bulunur ve Alt Akış harcanarak açılır.

---

## 5. Dünya

### Uçan Adalar
Prosedürel olarak üretilen ada takımadaları. Her biome 8-10 adadan oluşur, sonunda çıkış adası ve muhtemel bir boss karşılaması vardır. Adalar arasında süzülme ve platforming ile geçilir.

### Atmosfer
Canlı, yeşil doğa ile paslı, mekanik düşmanlar arasındaki kontrast oyunun görsel imzasıdır. Stilize bulutlar, yaprak parçacıkları, organik mesh'ler ve özel render pipeline'ı ile benzersiz bir görsel dil oluşturulur.

---

## 6. Düşmanlar — Nulls

Başka bir evrenden gelen paslı robotlar. Adaları işgal ederek yaşam sıvısı olan **Alt Akış**'ı toplamaktalar. Temel düşman Grunt; devriye, takip, saldırı ve kaçınma davranışlarına sahip, telegraph sistemiyle saldırı öncesi uyarı veriyor. İleride farklı düşman tipleri ve biome sonu boss'ları eklenecek.

---

## 7. Kaynak — Alt Akış

Alt Akış, yaşamı oluşturan bir sıvıdır. Düşmanlar topluyor, oyuncu onlardan alıyor. İki amaca hizmet eder:
- **Run içi** geçici güçlendirmeler
- **Run sonu** kalıcı ilerleme ve form blueprint açılışları

---

## 8. Core Loop

```
Ada'ya in → Keşfet ve düşmanları yen → Alt Akış ve loot topla
  → Çıkış adasına ulaş → Boss → Güçlenme noktası
  → Sonraki biome → Run sonu → Kalıcı ilerleme
```

---

## 9. Referans Oyunlar

- **Dead Cells** — Biome yapısı ve roguelite ilerleme
- **Ori and the Blind Forest** — Akışkan hareket ve doğa teması
- **Hollow Knight** — Keşif ve boss tasarımı
- **Hades** — Run-based ilerleme ve hikaye entegrasyonu

---

## 10. Benzersiz Satış Noktaları (USP)

1. **Yaprak Partikül Kimliği** — Hiçbir oyunda olmayan konsept: karakter bir model değil, canlı bir yaprak sürüsü
2. **Fluid Burst Mekaniği** — Hedefe fırla, geç, yeniden yönlendir, geri dön
3. **3D Roguelite** — Türün büyük çoğunluğu 2D; 3D olarak yapılmış fluid action-roguelite nadir
4. **Floating Sky Islands** — Bulutların üstünde, dikey ve yatay platforming imkânı sunan prosedürel adalar

---

## 11. Geliştirici

Bağımsız geliştirici **Hasan Tarhan** tarafından tek başına geliştirilmektedir.

---

# Görsel Kimlik (Art Direction)

## 12. Genel Ton: "Stilize Doğa vs. Paslı Makine"

Leafborn'un görsel dili, iki karşıt estetik arasındaki gerilim üzerine kuruludur:

- **Doğa tarafı** — akışkan, canlı, organik, parlak. Binlerce yaprağın nefes alan hareketi, yumuşak bulut kütleleri, yosunla kaplı kayalar, güneşte parlayan yapraklar.
- **Makine tarafı** — köşeli, paslı, bozulmuş, durağan. Nulls adı verilen düşmanlar kırık metal yüzeyler, mat paslı tonlar ve sert silüetlerle tanımlanır.

Bu kontrast oyunun **hem görsel hem tematik** imzasıdır. Web sitesi tasarımında da aynı zıtlık kullanılabilir: organik formlar (yapraklar, eğriler, bulut siluetleri) baskın, mekanik detaylar (çerçeveler, ikonlar) ikincil vurgu olarak.

## 13. Stilize Render (Toon + URP)

- Unity URP üzerinde yazılmış **stilize shader'lar** — flat shading, belirgin rim light, yumuşak gradient'ler
- **Outline yok** (Hollow Knight'tan farklı olarak), bunun yerine renk blokları ve silüet okunurluğu ile ayırt edilir
- **Custom cloud shader'lar** — Worley noise tabanlı, volumetric görünümlü ama performans dostu
- **Post-processing** — Beautify ile hafif bloom, yumuşak color grading, film grain yok
- **Lighting** — sıcak altın saat tonları baskın; gece/karanlık biome'lar planlanmış

## 14. Silüet ve Form Dili

- **Karakter**: Yuvarlak, yumuşak, dağılabilir. Sert çizgi yok — yaprak bulutu sürekli şekil değiştiriyor
- **Düşmanlar**: Köşeli, kırık, asimetrik. Dengesiz duruşlar, eksik parçalar
- **Çevre**: Organik eğriler baskın; kayalar bile stilize edilmiş yumuşak formlarla
- **UI**: Minimal, organik eğrilerle yuvarlanmış köşeler; mekanik/HUD hissi yerine "doğal" bir his

---

# Renk Paleti

## 15. Ana Palet — Doğa / Karakter

| Rol | İsim | Hex | Kullanım |
|-----|------|-----|----------|
| Primary | **Leaf Green** | `#7EC24C` | Yaprak ana rengi, ana vurgu |
| Secondary | **Deep Forest** | `#2E5B3A` | Gölgeler, derinlik |
| Highlight | **Sunlit Gold** | `#F4C86A` | Alt Akış, önemli vurgular, CTA |
| Tertiary | **Sky Mist** | `#CFE4E8` | Bulutlar, hafif arkaplanlar |
| Accent | **Life Amber** | `#E8A04C` | Sıcak vurgu, hikâye momentleri |

## 16. Zıt Palet — Makine / Düşman

| Rol | İsim | Hex | Kullanım |
|-----|------|-----|----------|
| Rust | **Null Rust** | `#8B4A2B` | Düşman yüzeyleri, tehlike göstergeleri |
| Steel | **Broken Steel** | `#5A5D5E` | Mekanik detaylar, UI çerçeveleri |
| Warning | **Ember Red** | `#C14A3C` | Hasar, tehdit, kritik alert |

## 17. Arka Plan / Nötr

| Rol | İsim | Hex | Kullanım |
|-----|------|-----|----------|
| Background Dark | **Twilight Navy** | `#1B2A38` | Sitenin koyu bölümleri, altbilgi |
| Background Light | **Morning Cream** | `#F5EFE0` | Açık bölümler, basın bölümleri |
| Text Primary | **Ink Green** | `#1A2E1F` | Ana metin (açık zeminde) |
| Text Inverse | **Leaf Cream** | `#F0EDE0` | Ana metin (koyu zeminde) |

## 18. Palet Felsefesi

- **Yüksek doygunluk, düşük kontrast** — renkler canlı ama göz yormuyor
- **Altın oranı** — her kompozisyonda bir sıcak (altın/amber) ton mutlaka var, bu oyunun duygusal kancası
- **Paslı tonlar küçük dozlarda** — çoğunluk yeşil/sıcak, pas sadece tehdit bölgelerinde
- Web sitesinde: %60 doğa paleti + %25 nötr + %15 altın vurgu + %5 pas ikincil vurgu

---

# Tipografi

Oyunun akışkan, organik ama kararlı karakteri için fontlar üç katmanda düşünülmeli.

## 19. Katman 1 — Display / Logo (Oyunun İmzası)

Oyunun adı ve web sitesindeki büyük hero başlıklar için. Organik ama güçlü, tercihen **hafif hand-drawn hissi olan humanist bir serif veya display** öneriyorum.

**Önerilen Fontlar:**
- **Cooper BT** veya **Cooper Std** — yuvarlak, sıcak, nostaljik; Hades/Spiritfarer havası
- **Fraunces** (Google Fonts, ücretsiz) — variable, opsiyonel hafif "soft" mod, çok modern ama karakterli
- **Editorial New** veya **PP Editorial New** — premium ama karakterli, modaya uygun indie hissi
- **Recoleta** — yumuşak serif, sıcak, okunur

> **İlk tercih:** *Fraunces* (ücretsiz, variable axis ile soft/wonky ayarı var — yaprak karakteriyle örtüşüyor) veya custom-hand-drawn logo + body font olarak başka bir şey.

## 20. Katman 2 — Body / Metin (Okunurluk)

Uzun açıklama metinleri, basın kiti, blog, özellik listeleri için. Temiz, modern, yüksek okunur bir **humanist sans-serif**.

**Önerilen Fontlar:**
- **Inter** — modern web standardı, nötr ama kaliteli
- **Manrope** — hafif yuvarlak, modern, sıcak
- **Satoshi** — premium hissi, geometric humanist
- **General Sans** — dengeli, okunur, karakterli

> **İlk tercih:** *Manrope* veya *General Sans* — Inter kadar nötr değil, yaprak temasının yumuşaklığına uyuyor.

## 21. Katman 3 — UI / Accent (Oyun İçi ve Web Kontroller)

Butonlar, etiketler, küçük bilgi metinleri için. Daha sıkı, biraz daha teknik bir sans-serif.

**Önerilen Fontlar:**
- **Space Grotesk** — geometric, modern, hafif "tech" hissi (Nulls teması için mükemmel)
- **JetBrains Mono** (sadece küçük meta bilgiler için — versiyon, tarih vs.)

## 22. Tipografi Kombinasyon Örnekleri

**Kombinasyon A — Sıcak ve Organik (Tavsiye Edilen):**
- Hero/Logo: **Fraunces** (italic soft, weight 700-900)
- Body: **Manrope** (400-500)
- UI: **Manrope** (600-700)

**Kombinasyon B — Daha Modern / Edgy:**
- Hero: **PP Editorial New** (italic)
- Body: **General Sans**
- UI: **Space Grotesk**

**Kombinasyon C — Nostaljik / Sıcak (Hades Tadında):**
- Hero: **Cooper BT**
- Body: **Satoshi**
- UI: **Satoshi**

## 23. Tipografik Prensipler

- **Hiyerarşi net olsun** — h1 (72-96px), h2 (48px), body (16-18px) arasında belirgin sıçramalar
- **Line-height cömert olsun** — 1.5-1.7 body için (okunurluk = oyunun akıcı ruhu)
- **Letter-spacing hafif negatif** büyük başlıklarda (-1% ile -3% arası), body'de 0
- **All caps'ten kaçın** — oyunun yumuşak ruhuna ters; küçük etiket/tag'ler hariç
- **Italic'i duygusal momentlerde kullan** — "A thousand leaves, one will." gibi tagline'larda

---

# Web Sitesi İçin Yönlendirmeler

## 24. Layout & Yapı

- **Hero bölümü** — büyük video/gif (karakter parçacık halinde akıyor), üstte tek satır tagline
- **Asimetrik kompozisyonlar** — merkezli hizalamaktan kaçın, yaprakların dağınıklığı düzeni kırmalı
- **Paralax** — bulutlar, yapraklar katmanlı olarak kayabilir (ama az ve zarif)
- **Grid yerine akışkan bölümler** — çok geometrik olmasın

## 25. Mikro-Etkileşimler

- **Yaprak parçacık cursor efekti** — imleç peşinden birkaç yaprak
- **Hover** animasyonlar — buton üstüne gelince yaprak dağılır
- **Scroll triggered** — sayfada aşağı kaydıkça yapraklar yeniden toplanır/dağılır
- **Loading** — yaprakların karaktere dönüştüğü kısa bir animasyon

## 26. Ton ve Yazı Stili

- Metinler kısa, aktif fiillerle
- İkinci tekil şahıs ("Sen bin yapraksın") yerine evrensel/varlık tonu tercih et
- Her bölümün bir **duygu kancası** olmalı — feature listesi gibi değil
- Tagline örneği: *"Bin yaprak. Tek irade. Sonsuz form."*

## 27. Favicon & Logo Marks

- Stilize tek bir yaprak silueti (yarı-simetrik, hafif eğimli)
- Veya yaprak kümesinin minimalist yığın sembolü
- Renk: Leaf Green `#7EC24C` + Sunlit Gold `#F4C86A` küçük bir glow

---

## 28. Moodboard Referansları

Web sitesi ve görsel iletişim için bakılabilecek referanslar:

- **Sable (oyun)** — minimalist stilize render, sıcak paleti
- **Ori and the Will of the Wisps** — ışık, glow, doğa ile uyum
- **Journey** — minimal tipografi, duygusal ton
- **Hades store page** — güçlü palet, karakter vurgusu, italic display font
- **Tunic site** — organik form, yumuşak palet, akıcı scroll
- **Spiritfarer** — yumuşak paleti ve ekonomik tipografi
