/* Çakal Avı — çevrimdışı önbellek.
   Oyun dosyaları kurulumda, three.js gibi dış kaynaklar ilk kullanımda saklanır.

   Dikkat: GitHub Pages HTML'i "max-age=600" ile veriyor, yani tarayıcı on
   dakika boyunca eski sayfayı ağa hiç sormadan sunabiliyor. Bu yüzden HTML
   ve harita verisi {cache:'reload'} ile isteniyor — tarayıcı önbelleği
   atlanıyor, cevap bizim önbelleğimize yazılıyor.                          */
const V = 'cakalavi-v11';
const CORE = ['./', './index.html', './world.json', './manifest.webmanifest',
              './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V)
    .then(c => c.addAll(CORE.map(u => new Request(u, { cache:'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('message', e => { if(e.data === 'skip') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  const fresh = sameOrigin && (url.pathname.endsWith('.html') || url.pathname.endsWith('/')
                || url.pathname.endsWith('world.json') || url.pathname.endsWith('version.json'));

  /* oyun dosyaları: önce ağ (tarayıcı önbelleği atlanarak), olmazsa önbellek */
  if(fresh){
    e.respondWith(
      fetch(new Request(req.url, { cache:'reload', credentials:'same-origin' })).then(res => {
        const copy = res.clone();
        caches.open(V).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }
  /* diğer her şey: önce önbellek, yoksa ağ */
  e.respondWith(
    caches.match(req).then(hit => {
      if(hit) return hit;
      return fetch(req).then(res => {
        if(res && (res.ok || res.type === 'opaque')){
          const copy = res.clone();
          caches.open(V).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => new Response('', { status:504, statusText:'çevrimdışı' }));
    })
  );
});
