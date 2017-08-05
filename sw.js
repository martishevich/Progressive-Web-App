const OFFLINE_URL =  '/';
self.addEventListener('install', function(e) {
  e.waitUntil(
      caches.open('airhorner').then(function(cache) {
        return cache.addAll([
            '/Progressive-Web-App/',
            '/Progressive-Web-App/index.html',
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' ||
      (event.request.method === 'GET' &&
       event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request).catch(error => {
        return caches.match(OFFLINE_URL);
      })
    );
  }
});
