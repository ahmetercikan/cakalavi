# Çakal Avı — Denizkent Yazı

Yalı / Şifne (Çeşme) kıyısındaki **Denizkent** sitesinin uydu görüntüsünden çıkarılmış
gerçek haritası üzerinde geçen, tarayıcıda çalışan üçüncü şahıs 3B yaz oyunu.
Ali ve Alya koyda ganimet toplar, büfede satar, gece el feneriyle çakal avına çıkar.

**Oyna:** https://ahmetercikan.github.io/cakalavi/

Telefon ve tablette (iOS + Android), dikey ve yatay oynanır; ana ekrana eklenince
tam ekran bir uygulama gibi açılır ve çevrimdışı çalışır.

## Oynanış

- **W A S D / ok tuşları** yürü · **Shift** koş · **Boşluk** zıpla
- **C** suda dal (nefes halkası boşalmadan yüzeye çık)
- **E** büfe, hurdacı, muhtar panosu, arkadaşla konuş, kıyıdan çakıl topla
- **F** el feneri · **R** veya sol tık taş at
- **I** çanta · **T** Ali ↔ Alya · **M** harita modu · **H** yardım · **P** parıltı efekti
- Fareyle sürükleyerek bak, çift tıkla serbest bakış

### Telefon / tablet

- **Sol yarı:** parmağını bas-kaydır, yön çubuğu parmağının altında belirir; kenara dayanınca koşar
- **Sağ yarı:** sürükle → kamerayı çevir, tek dokunuş → taş at, iki parmak → yakınlaş
- **Sağ alt:** dal, zıpla, fener, taş, çanta, Ali↔Alya ve büyük etkileşim tuşu (yakında bir yer varsa yanar)
- Dikey ve yatay yerleşim ayrı ayrı tasarlandı; çentik/ev düğmesi güvenli alanları gözetilir
- Titreşimli geri bildirim, ekranı uyanık tutma, tam ekran düğmesi
- iPhone'da **Paylaş → Ana Ekrana Ekle**, Android'de **Uygulamayı yükle** ile tam ekran kurulur

## İçerik

- Kıyı şeridi, sokaklar, binalar, havuzlar ve ağaçlar uydu görüntüsünden çıkarıldı;
  deniz tabanı kum / deniz çayırı / kayalık olarak sınıflandırıldı
- 9 çeşit ganimet (kabuk, salyangoz, mineralli taş, parlak mineral, deniz camı ve
  delik otel terliği gibi dört "çöp ganimet"), çanta, para, iki satış noktası, 6 geliştirme
- 7 görev, yüzme ve dalış, nefes ve dayanıklılık
- Gece modunda çakallar: fener ışığı ve taş kaçırır, çakı yaklaştırmaz, muhtar ödül verir
- Edibe terlik savurur, Sadık soda şişesi fırlatır; yiyince çantadan ganimet düşer

## Teknik

Tek dosya (`index.html`) + harita verisi (`world.json`). Three.js r160 CDN'den yüklenir,
parıltı katmanı `three/addons` ile eklenir. Yapı adımı yoktur; depo olduğu gibi
GitHub Pages'e yayınlanır (`.github/workflows/pages.yml`).

**Mobil:** `manifest.webmanifest` + `sw.js` ile yüklenebilir ve çevrimdışı çalışır
(PWA). Sahne, cihazın çekirdek sayısı, belleği ve ekran boyutuna göre dört kalite
kademesinden birinde kurulur: gölge çözünürlüğü, su ağı, ganimet yoğunluğu, serpinti,
görüş mesafesi ve parıltı katmanı buna bağlı. Kare hızı düşerse kademe oyun sırasında
kendiliğinden iner. Test için `?tier=0..3` ve `?touch=1` parametreleri vardır.
