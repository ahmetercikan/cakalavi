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
- Telefonda arayüz köşelere toplanır: sağ üstteki araç rayı tek bir menü düğmesinin
  arkasında durur, çanta ve karakter değiştirme oraya taşınmıştır, alt düğmeler
  ikidir. 390×844 bir telefonda arayüzün kapladığı alan %39'dan %19'a,
  yatayda %35'ten %17'ye indi
- **Ekrana bir kez dokun:** zıpla
- **Alttaki şerit:** yakınında bir şey varken çıkar, ona dokununca etkileşirsin —
  ayrı bir "etkileş" tuşu yok
- **Ekranı sürükle:** kamerayı çevir; iki parmak → yakınlaş
- **Sağ alt:** taş ve fener. Yüksel/Alçal yalnız suda ve süpürgedeyken çıkar;
  çanta ve karakter değiştirme sağ üstteki menüde
- Dikey ve yatay yerleşim ayrı ayrı tasarlandı; çentik/ev düğmesi güvenli alanları gözetilir.
  Telefon (360×800, 390×844, 412×915), küçük yatay (667×375), tablet (768×1024,
  820×1180, 1180×820) ölçülerinde dikey ve yatay olarak ölçüldü: hiçbir parça
  ekran dışında kalmıyor, HUD parçaları üst üste binmiyor, başlık kartı taşmıyor
- Titreşimli geri bildirim, ekranı uyanık tutma, tam ekran düğmesi
- iPhone'da **Paylaş → Ana Ekrana Ekle**, Android'de **Uygulamayı yükle** ile tam ekran kurulur
- Masaüstü tarayıcıda da aynı dokunmatik yerleşim açılır (fareyle sürüklenir); eski
  masaüstü yerleşimi yalnızca test için `?desktop=1` ile görülebilir

## Harita

Harita Yalı / Şifne'nin (Çeşme, İzmir) 965 × 562 m'lik bir parçası. Köşe
koordinatları `world.json` içindeki `meta.originLat/originLon` ile veriliyor —
bu ikisi **haritanın ortası**, köşesi değil.

**Yükselti.** EU-DEM 25 m + SRTM 30 m, 3 m'lik ızgaraya oturtulmuş. Veriyi
bağımsız olarak kontrol ettim: 3705 örnek noktada EU-DEM ile karşılaştırınca
r = 0,997 ve ortalama sapma 0,33 m çıkıyor, yani arazi gerçekten ölçülmüş
araziyle aynı. Deniz 0'ın altında, en yüksek nokta 24 m.

**Yollar.** OpenStreetMap'ten alınıyor, sokak adları Google Haritalar ve
Street View tabelalarıyla doğrulandı: 48 adlı sokak, 12,6 km, kaldırım ve
merdivenler dahil. Önceki çizim hatalıydı — Street View kamera konumları
yolun üstünde olduğu için ölçüt kabul edilebilir, panoramaların OSM yoluna
uzaklığı ortalama **1,5 m**, eski çizime **8,2 m**. Eski katman ayrıca kendi
içinde ikiz çizilmişti: 20,5 km'lik uzunluğun 16,4 km'si başka bir yolun
6 m yakınında duruyordu. OSM'in görmediği parçalar (haritanın doğu ucu,
Ak Turizm çevresi) eski veriden 10,5 m geri kaydırılarak eklendi.

**Sokak eğimi.** Kaplamanın kotu motorda "kesitin iki kenarından yüksek
olanı" diye bulunuyor. Eğimi enlemesine kesen bir sokakta bu, kaplamayı
alçak kenarın üstünde bırakıp kaldırımı duvara çeviriyordu; kavşakta da iki
yol ayrı kota oturup aralarında basamak kalıyordu. Çözüm arazide: her yolun
boy kesiti DEM'den okunup 10 m'lik bir çekirdekle yumuşatılıyor, sonra yolun
altındaki ve iki yanındaki iki metrelik şerit tam olarak o kota eşitlenip
dokuz metrede DEM'e dönülüyor. Kıyı bandı dokunulmuyor — yoksa plajın
arkasında yapay bir set oluşuyor. Çıkan eğimler: en dik **6158. Sk. %13,5**,
sonra 6165 %13,2 ve 6160/1 %12,2; içerideki 6317 ve 6314 neredeyse düz.
Yürüyüş hızı eğime bağlı: yokuş yukarı yavaşlıyor, aşağı azıcık hızlanıyor.

**Binalar.** 414 bina, OSM taban alanlarından en küçük alanlı yönlü
dikdörtgenle çıkarıldı: ortalama taban 162 m², eskiden 226 m²'ydi, yani
evler fazla iriydi. Yolların yerine oturmasıyla birlikte yol koridoruna
giren bina oranı %42'den %13'e indi. Çatılar kiremit kırma — uydu
görüntüsünde Ak Turizm'in uzun sıra evleri de kiremit, o yüzden "apartman"
etiketli olsalar da düz çatı verilmiyor.

**Zemin örtüsü ve ağaçlar.** Köy oyunda uçsuz bucaksız kum gibi
duruyordu; gerçekte Yalı yemyeşil. Esri World Imagery'nin z18 karesi
(0,47 m/piksel) tarayıcıda indirilip piksel piksel sınıflandırıldı:
normalize edilmiş fazla-yeşil göstergesi (2g−r−b) ağaç tacını otluktan,
parlaklık da sert zeminden ayırıyor, kiremit çatı kendi kırmızı oranıyla
eleniyor. Kara hücrelerin **%40'ı ağaç altı, %26'sı bahçe ve ot,
%34'ü sert ve açık zemin** çıktı — eski veride neredeyse her yer taşlıktı,
serpinti de buna bakıp çakıl döküyordu. Ağaçlar aynı tepe örtüsünden
çıkarıldı: tepe yoğunluğunun yerel en yükseklerine taç genişliği kadar
aralıkla ağaç kondu, 1.434 yerine **3.422 ağaç**. Ağaç kaydına dördüncü
alan olarak tür eklendi (0 zeytin/maki · 1 fıstık çamı · 2 palmiye);
eskiden tür boy çarpanından türetiliyordu ve uydudan gelen taç boyutu
doğrudan boy sanılınca yirmi metrelik, gövdesi iki metre kalın ağaçlar
çıkıyordu. Çamın silueti de iki sivri koniden yayvan tepeli fıstık çamına
çevrildi. Yoğunluk kare hızını 60'tan 44'e düşürünce ucuz ayrıntı
kademesinden gölge atma kaldırıldı; oyuncunun çevresindeki öbekler zaten
model kademesine geçiyor ve gölgeyi onlar veriyor.

**Yol genişlikleri.** Vektör katmanı uydu karesinin üstüne bindirilip
ölçüldü: mahalle sokağının kaplaması 4,5–5 m, servis yolu 3,5 m. Önceki
6 m'lik sokak kaplamayı bahçelere taşırıyor, üç sokağın buluştuğu yeri de
meydana çeviriyordu. Yollar ayrıca arazi ızgarasının bittiği yerde
kırpılıyor — taşan uç, haritanın güney kenarında havada duran beyaz bir
levha gibi görünüyordu.

**Bahçe duvarları.** Duvar, binanın merkezinden en yakın yol **köşe
noktasına** doğru kuruluyordu. Yollar OSM'den gelince düz bir sokak iki
köşe noktasıyla geçilir oldu: en yakın köşe yüz metre öteye düştü, duvar
da çapraz bir yöne, çoğu zaman sokağın ortasına dikildi — sokaklarda
ortada duran beyaz bloklar bunlardı. Çizgiler artık iki metrede bir
örnekleniyor, duvar binanın sokağa bakan cephesine paralel kuruluyor,
araziyi parça parça izliyor ve kaplamaya giriyorsa hiç kurulmuyor.

**Sahadan gelen düzeltmeler.** Street View'da yaya olarak gezilen sokaklardan:
sahil yolu (6155/1. Sk.) baştan sona parke, ortasında kiremit şerit, denizle
arasında kuru ot bandı var; ara sokaklar da parke, asfalt yok; bahçeler moloz
taş istinat duvarı, beyaz sıvalı korkuluklu duvar ve boy hizasında çit ile
çevrili. "Delil Doktorlar Sitesi" tabelada **Delfi Doktorlar Sitesi**.
Edibe ile Sadık'ın evi gerçekte 6182. (Keklik) Sokak'ta.

## İçerik

- Kıyı şeridi, deniz tabanı ve ağaç örtüsü uydu görüntüsünden çıkarıldı;
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

## İki kişi online

Oyun GitHub Pages'te duran düz bir sayfa; arkasında sunucu yok. Bu yüzden iki
tarayıcı birbirine **doğrudan** bağlanıyor (WebRTC). Buluşmayı Trystero
hallediyor: iki taraf da aynı oda koduna girince açık nostr röleleri üzerinden
birbirlerini buluyor, ondan sonrası doğrudan bağlantı. Kütüphane yalnız online
oynanacağı zaman indiriliyor, tek kişilik oyuna hiçbir maliyeti yok.

- Başlık ekranında **Oda kur** → beş karakterlik bir kod çıkar, arkadaşına ver
- Arkadaşın kodu yazıp **Katıl** der; bağlanınca oyun ikisinde de başlar
- Odayı kuran seçtiği karakteri oynar, katılan diğerini alır. Online oyunda
  karakter değiştirme kapalı
- Üstteki rozet kimin bağlı olduğunu ve gidiş-dönüş süresini gösterir

Dünya iki tarafta da aynı tohumla kurulduğu için ağaç, ev, kaya ve ganimet
aynı yerde duruyor; ağdan yalnız oyuncunun durumu (saniyede on iki paket) ve
birkaç olay geçiyor: ganimet alma, taş atma, süpürgeye binme, konuşma ve günün
saati. Çanta ve para herkesin kendine ait. Çakallar, Edibe ve Sadık iki tarafta
ayrı ayrı işliyor — kovalamaca kişisel.

Sınır: aradaki bağlantı doğrudan kurulduğu için bazı kısıtlı ağlarda (kurumsal
güvenlik duvarı, bazı mobil operatörler) eşleşme kurulamayabilir; böyle bir
durumda oyun tek kişilik moda düşer.

## Görsel katman

Sahne duruyordu: otlar kıpırdamıyor, gökyüzü boş, zemin tek bir aydınlıktaydı.
Üçü de tek bir rüzgâr saatine bağlandı.

- **Rüzgâr:** ot, çalı ve ağaçlar köşe gölgelendiricisinde salınıyor. Her bitki
  kendi dünya konumundan türeyen bir fazla hareket ediyor, tabanı sabit kalıyor;
  esinti kendi içinde kabarıp iniyor, tek düze bir sallanma yok
- **Bulutlar:** gökyüzü kubbesinde, döşenebilir bir gürültü dokusundan okunan
  keskin kenarlı lekeler. Günün saatine göre renk ve yoğunluk değişiyor
- **Bulut gölgeleri:** aynı doku yerde de kayıyor; arazi ve yollar bulut
  geçerken kararıyor
- **Martılar** gündüz koyun üstünde süzülüyor, **ateşböcekleri** gece
  karakterin çevresinde yanıp sönüyor — ikisi de tek çizim çağrısı

Ölçüm: en zayıf kalite kademesinde (tier 0) dururken 59,7 · koşarken 59,6 ·
gece 60,3 kare/sn.

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

Ali ve Alya hazır model değil: ikisi de oyunun içinde kodla kuruluyor.
Bir süre Kenney'in Mini Characters paketi kullanıldı — otuz iki hazır
animasyon klibi bedavaydı ama gövde birkaç düz renk bloktan ibaretti:
omuz yok, boyun yok, yüz dokuya çizili. Yakın kamerada oyuncak gibi
duruyordu. Hareket zaten burada prosedürel olduğu için paketten
vazgeçildi; iki .glb dosyası ve doku atlası depodan çıktı.

Oranlar bir ara oyun oranıydı: boy dört baş, iri kafa, kısa kalın
uzuvlar. Silüet uzaktan iyi okunuyordu ama yakın kamerada oyuncak gibi
duruyordu. Ölçüler gerçek bir çocuğunkine çekildi — boy 1,34 metre ve
beş buçuk baş, bacak boyun yüzde 52'si. Ayak tabanı sıfır kabul
edilerek: bilek 0,06 — diz 0,37 — kalça 0,70 — omuz 1,03 — çene 1,10 —
tepe 1,34. Yetişkinler yedi buçuk baş, 1,70–1,75 metre.

Uzuvlar omuzdan bileğe tek parça deri; iki kemiğe bağlı oldukları için
dirsek ve diz kumaş gibi kıvrılıyor, eklemde geometri kırılmıyor. Deri
boyunca iki tümsek var: üstte pazı ve uyluk kası, eklemin altında
baldır ve ön kol — baldır ayrıca arkaya kayıyor, çünkü baldır kası
bacağın arkasındadır. Köylüler kalıptan kopyalandığı için three.js'in
paylaştırdığı iskelet kopyada yeniden bağlanıyor (`reskin`); yoksa
yetmiş köylü tek bir kişinin hareketini tekrarlardı.

Gövde tek yarıçap eğrisiyle çevrilmiş bir fıçıydı: her kesit daire,
omuzdan kalçaya aynı oranda yuvarlak. İnsan gövdesinde kesit hiçbir
yerde daire değil — göğüs yayvan, bel ince, kalça derin. `shapeZ`
dönel yüzeyin her halkasını kendi derinliğine göre sıkıştırıyor ve
öne-arkaya kaydırıyor; omurganın S kıvrımı buradan geliyor.

Şort kalçayı saran kısa bir koniydi, paçası uyluğun üçte birinde
bitiyordu: kumaş gibi değil iç çamaşırı gibi duruyordu. Gerçek şortun
üç işareti var — paça dizin hemen üstünde biter, aşağı doğru genişler
(bacağa yapışmaz) ve ağzında katlanmış bir bant vardır. Üçü de artık
yerinde; paçalar uyluk kemiğine bağlı, yani bacakla birlikte dönüyor.

Yüz çiziliyor, parçalardan kurulmuyor. Göz, kaş ve ağız bir süre küçük
küre ve halkalardan yapıldı; küre kafatasının dışına taşınca profilden
baloncuk gibi duruyor, içeri alınca göz bebeği kayboluyordu. Artık tek
bir tuval dokusu küreye sarılıyor (`faceTex`): three.js küre dokusunda
u=0,75 tam olarak yüzün baktığı yön, bir yarıçap 1024/2π piksel, bu
yüzden oran ve çizgi kalınlığı piksel piksel yazılabiliyor. Göz kırpma
dokuyu kapalı sürümle değiştiriyor.

Ali kıvırcık: saç, saç çizgisi boyunca dizilen yüz kırk küçük kümeden
tek geometride birleşiyor, her küme kendi ton farkını köşe renginde
taşıyor. Kümeler önce bütün kafatasına serpiliyordu ve gözleri de
kapatıyordu; saç çizgisi artık yöne göre değişiyor — önde kaşın hemen
üstünde bitiyor, arkada enseye iniyor. Alya'nın kısa saçı ve adım temposuyla
sallanan at kuyruğu var; kâkülü küre diliminden kesiliyordu ve alında
cetvelle çizilmiş gibi düz bir çizgi bırakıyordu, şimdi alın hattı
boyunca dizilen tutamlardan oluşuyor.

Omuz çantası önce sırt çantasıydı: oyuncu karakteri neredeyse hep
arkadan gördüğü için çanta bütün sırtı kapatıyor, kıyafet hiç
görünmüyordu. Askı göğsü çaprazlıyor, kese kalçanın yanında duruyor.
"File çanta" yükseltmesi alınınca diğer kalçaya ganimet filesi geliyor.

Kafa tek küreydi: suratın alt yarısı tepesiyle aynı genişlikte
kalıyordu. İnsan kafatası elmacık kemiğinden aşağı daralıp çeneye
iner; köşe noktaları aşağı indikçe yanlardan sıkıştırılıyor ve çene
biraz öne çıkıyor. Doku koordinatları değişmediği için yüz yerinde
kalıyor.

Köylüler de aynı elden geçti: kutu gövde ve kutu kafa yerine dönel
profiller, küreler ve tek parça uzuv derisi. Baş hâlâ tek geometri —
yetmiş köylü için çizim sayısı değişmedi. Ayak küresinin altı bilek
kotunun aşağısında kalıyordu, herkes tabanı toprağa gömülü
yürüyordu; taban artık tam sıfırda. Pantolon paçası dizin üstünde
bitiyor, altı ten rengi kalıyordu — paça ayak bileğine indi.

Oturma pozunda uyluk eksi yöne döndürülüyordu: diz öne değil arkaya
gidiyordu, sandalyeye ters binmiş gibi bir duruş çıkıyordu. Artı yön
öne demek — uyluk öne yatıyor, baldır aşağı iniyor, ayaklar yere
basıyor. Kumsalda oturanlar sandalye olmadığı için ayrı poz
kullanıyor: kalça kumda, bacaklar öne uzanmış.

Sokakta gezenler iki uç arasında düz çizgide yürüyordu; araya bina
girince duvara dayanıp yanlamaya çalışıyor, köşede sıkışıp olduğu
yerde adım sayıyordu. Artık yolun kendi çizgisi güzergâh: yol zaten
binaların arasından geçtiği için duvara hiç değmiyorlar. Yine de bir
sıkışma bekçisi var — iki saniye yürüyüp yerinden kımıldamayan bir
sonraki noktaya geçiyor. Sokak hayvanları da bina içini hedef
seçmiyor.

HUD madalyonundaki ve başlık ekranındaki portreler aynı renklerle elle
çiziliyor; madalyondaki çocukla koşan çocuk aynı kişi.

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
