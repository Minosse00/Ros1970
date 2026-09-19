self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('spese-auto-cache-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './Fiat_Sedici.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
