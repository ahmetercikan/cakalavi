# Çakal Avı — Denizkent Yazı

Yalı / Şifne (Çeşme) kıyısındaki **Denizkent** sitesinin uydu görüntüsünden çıkarılmış
gerçek haritası üzerinde geçen, tarayıcıda çalışan üçüncü şahıs 3B yaz oyunu.
Ali ve Alya koyda ganimet toplar, büfede satar, gece el feneriyle çakal avına çıkar.

**Oyna:** https://ahmetercikan.github.io/cakalavi/

## Oynanış

- **W A S D / ok tuşları** yürü · **Shift** koş · **Boşluk** zıpla
- **C** suda dal (nefes halkası boşalmadan yüzeye çık)
- **E** büfe, hurdacı, muhtar panosu, arkadaşla konuş, kıyıdan çakıl topla
- **F** el feneri · **R** veya sol tık taş at
- **I** çanta · **T** Ali ↔ Alya · **M** harita modu · **H** yardım · **P** parıltı efekti
- Fareyle sürükleyerek bak, çift tıkla serbest bakış; telefonda joystick ve dokunmatik tuşlar

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
bloom katmanı `three/addons` ile eklenir. Yapı adımı yoktur; depo olduğu gibi
GitHub Pages'e yayınlanır (`.github/workflows/pages.yml`).
