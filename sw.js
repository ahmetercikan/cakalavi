/* Çakal Avı — çevrimdışı önbellek.
   Oyun dosyaları kurulumda, three.js gibi dış kaynaklar ilk kullanımda saklanır. */
const V = 'cakalavi-v4';
const CORE = ['./', './index.html', './world.json', './manifest.webmanifest',
              './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;

  /* oyun dosyaları: önce ağ, olmazsa önbellek (güncel kalsın ama çevrimdışı da açılsın) */
  if(sameOrigin && (url.pathname.endsWith('.html') || url.pathname.endsWith('/') || url.pathname.endsWith('world.json'))){
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(V).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }
  /* diğer her şey: önce önbellek */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if(res && (res.ok || res.type === 'opaque')){
        const copy = res.clone();
        caches.open(V).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => hit))
  );
});
