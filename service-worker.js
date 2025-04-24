self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('gewinnspiel-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png',
        './gewinnspiele_20250424.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
