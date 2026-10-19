# Çakal Avı — Denizkent Yazı

Yalı / Şifne (Çeşme) kıyısındaki **Denizkent** sitesinin uydu görüntüsünden çıkarılmış
gerçek haritası üzerinde geçen, tarayıcıda çalışan üçüncü şahıs 3B yaz oyunu.
Ali ve Alya koyda ganimet toplar, büfede satar, gece el feneriyle çakal avına çıkar.

**Oyna:** https://ahmetercikan.github.io/cakalavi/

Telefon ve tablette (iOS + Android), dikey ve yatay oynanır; ana ekrana eklenince
tam ekran bir uygulama gibi açılır ve çevrimdışı çalışır.

## Oynanış

Oyun yalnızca dokunmatik oynanır; arayüzde klavye tuşu geçmez.

- **Sol altta sabit yön çubuğu:** başparmağını üstüne koy, istediğin yöne it; kenara dayanınca koşar
- **Ekrana bir kez dokun:** zıpla
- **Ekranı sürükle:** kamerayı çevir; iki parmak → yakınlaş
- **Sağ alt:** dal, zıpla, fener, taş, çanta, Ali↔Alya ve büyük etkileşim tuşu (yakında bir yer varsa yanar)
- Dikey ve yatay yerleşim ayrı ayrı tasarlandı; çentik/ev düğmesi güvenli alanları gözetilir.
  Telefon (360×800, 390×844, 412×915), küçük yatay (667×375), tablet (768×1024,
  820×1180, 1180×820) ölçülerinde dikey ve yatay olarak ölçüldü: hiçbir parça
  ekran dışında kalmıyor, HUD parçaları üst üste binmiyor, başlık kartı taşmıyor
- Titreşimli geri bildirim, ekranı uyanık tutma, tam ekran düğmesi
- iPhone'da **Paylaş → Ana Ekrana Ekle**, Android'de **Uygulamayı yükle** ile tam ekran kurulur
- Masaüstü tarayıcıda da aynı dokunmatik yerleşim açılır (fareyle sürüklenir); eski
  masaüstü yerleşimi yalnızca test için `?desktop=1` ile görülebilir

## İçerik

- Kıyı şeridi, sokaklar, binalar, havuzlar ve ağaçlar uydu görüntüsünden çıkarıldı;
  deniz tabanı kum / deniz çayırı / kayalık olarak sınıflandırıldı
- 9 çeşit ganimet (kabuk, salyangoz, mineralli taş, parlak mineral, deniz camı ve
  delik otel terliği gibi dört "çöp ganimet"), çanta, para, iki satış noktası, 6 geliştirme
- 13 görev, yüzme ve dalış, nefes ve dayanıklılık
- Gece modunda çakallar: fener ışığı ve taş kaçırır, çakı yaklaştırmaz, muhtar ödül verir
- Edibe terlik savurur, Sadık soda şişesi fırlatır; yiyince çantadan ganimet düşer
- **Ayı Murat:** kumsalda taş kaldıran, gür sesli, kalbi yumuşak kabadayı
- **Site sakinleri:** bahçesinde oturanlar, sokakta gezenler, kumsalda ve suda olanlar —
  yetmiş kişi; yanlarına gidip selam verilir. Gece bahçeler ve kumsal boşalır
- **Sokak hayvanları:** yirmi bir kedi ve köpek; sevilince peşinizden gelirler,
  kediler ürkektir
- **Orkinos:** açıkta dolaşan sürü; yaklaşınca savrulur, ara sıra su yüzüne vurur
- **Uçan süpürge:** binip sitenin üstünden geçilir; havadaki altı halkadan
  sırayla geçmek süreli bir tur oyunu
- **Pota:** sahanın yakınında taş atışı kendiliğinden kavise döner, çember sayar

## Ses

Oyunun bütün sesi tarayıcıda, Web Audio ile yerinde üretiliyor — tek bir
dosya indirilmiyor. Kurulumda bir kez pembe gürültü tamponu yazılıyor,
geri kalan her şey osilatör ve zarf: adımlar (kumda daha yumuşak), zıplama
ve iniş, suya giriş ve dalış, ganimet, para, taş atışı, potadan geçen sayı,
süpürge halkası, kedi miyavı, köpek havlaması, gece çakal uluması. Üstüne
bir ortam katmanı: denize yaklaştıkça kabaran dalga, rüzgâr, gece böcekleri.

Süpürgeye binince arkada **mezdeke tarzı** bir parça çalıyor. O da canlı
üretiliyor: hicaz dizisi (re–mi bemol–fa diyez–sol–la–si bemol–do) üzerinde
yürüyen bir ezgi, altında darbuka düzeni (düm-tek-ka), 128 vuruş. Ezgi her
ölçüde değişiyor ve ara sıra çarpma nota düşüyor ki tekrar etmesin. Süpürgeden
inince eriyerek susuyor.

Ses sağ üstteki hoparlör düğmesiyle (ya da **S**) kapatılır, tercih
hatırlanır. Tarayıcılar sesi ilk dokunuştan önce açtırmadığı için ses
bağlamı "Başla"da kuruluyor.

## Teknik

Tek dosya (`index.html`) + harita verisi (`world.json`) + `assets/` altında birkaç
hazır model. Three.js r186 CDN'den yüklenir,
parıltı katmanı `three/addons` ile eklenir. Yapı adımı yoktur; depo olduğu gibi
GitHub Pages'e yayınlanır (`.github/workflows/pages.yml`).

**Mobil:** `manifest.webmanifest` + `sw.js` ile yüklenebilir ve çevrimdışı çalışır
(PWA). Sahne, cihazın çekirdek sayısı, belleği ve ekran boyutuna göre dört kalite
kademesinden birinde kurulur: gölge çözünürlüğü, su ağı, ganimet yoğunluğu, serpinti,
görüş mesafesi ve parıltı katmanı buna bağlı. Kare hızı düşerse kademe oyun sırasında
kendiliğinden iner. Test için `?tier=0..3` ve `?desktop=1` parametreleri vardır.

## Logo ve kurulum

Simge SVG olarak çizildi, oradan 192 ve 512 piksel PNG'ye alındı: ay ışığının
önünde çakal silüeti, altında ay vurmuş deniz. Android'in yuvarlak/kare maskesi
kenarlardan kırptığı için maskeli sürüm ayrı üretildi — çizim güvenli alanın
içinde duruyor. iOS için 180 piksellik ayrı bir dosya, tarayıcı sekmesi için
keskin kalsın diye SVG var. Aynı işaret başlık kartının üstünde de duruyor.

## Varlıklar

Ali ve Alya, Kenney'in **Mini Characters** paketinden (CC0, https://kenney.nl)
gelen hazır karakterler. Otuz iki animasyon klibi paketle birlikte geliyor;
oyun durma, yürüme, koşma, zıplama, düşme, eşya alma ve elde tutma
kliplerini kullanıyor. Karakter başına 723-876 üçgen.

Paket gövdeleri birkaç düz renk bloktan ibaret olduğu için üstlerine oyunun
kendi ayrıntıları ekleniyor: Ali'ye kasket, Alya'ya saç bandı ve adım
temposuyla sallanan at kuyruğu, ikisine burun, kulak, yaka, kemer, ayakkabı
tabanı ve omuz çantası. Parçalar kemiklere takılıyor, kemiğin kendi ölçeği
geri alınarak dünya ölçüsünde yazılıyor; ten ve saç renkleri modelin kendi
doku atlasından okunuyor ki eklenen parçalar gövdeyle birebir tutsun.
HUD madalyonundaki portreler de aynı renklerle çiziliyor. Ayrıntıların
tamamı karakter başına 1.838 üçgen; ölçülen kare hızı farkı sıfır.

Çanta baştan görünüyor; "File çanta" yükseltmesi alınınca sırt çantası da
ekleniyor.

`assets/` altındaki kaya, çakıl, çalı ve ağaç modelleri Quaternius'un **Stylized Nature
MegaKit** paketinden (CC0, https://quaternius.com) alınmıştır. Dokuları
çıkarılmış, yerine oyunun kendi düz toon renkleri uygulanmıştır; toplam ~1 MB.
Model dosyaları zorunlu değildir — yüklenemezlerse oyun prosedürel geometriyle
çalışmaya devam eder.

Yerdeki ot, çakıl ve çalılar oyuncunun 26 metrelik çemberinde duruyor ve
konumları bulundukları karenin koordinatından türetiliyor — aynı yerde hep
aynı bitki. Hangi karede ne biteceğini de yalnız zemin ve karenin kendi
sayısı belirliyor, boş yuva sayısı değil; yuvalar en yüksek talebin %15
üstünde tutulduğu için hiçbir bitki yuva bitti diye elenmiyor. Çemberin
dışına çıkanlar son yedi metrede boyları küçülerek siliniyor, yani bitkiler
belirmek yerine büyüyerek giriyor.

Ağaçlar iki ayrıntı kademesinde duruyor: yakındakiler hazır model, uzaktakiler
eski prosedürel geometri. Sınırı mesafe değil üçgen bütçesi koyuyor — öbekler
yakından uzağa sıralanıp bütçe bitene kadar modele geçiriliyor, böylece ağaç
yoğunluğu ne olursa olsun maliyet sabit kalıyor (telefonda 26 bin, masaüstünde
260 bin üçgen).
