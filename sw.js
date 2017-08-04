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


