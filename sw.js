var CACHE = 'te-v3';
var ASSETS = [
  '/index.html', '/dashboard.html', '/session.html',
  '/test.html', '/stats.html', '/library.html', '/review.html',
  '/settings.html', '/log.html', '/diagnostic.html', '/preview.html',
  '/css/style.css', '/js/app.js', '/js/content.js', '/js/diagnostic.js',
  '/js/toast.js', '/js/transitions.js', '/js/shortcuts.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return Promise.allSettled(ASSETS.map(function(a) { return c.add(a).catch(function(){}); }));
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  // Never intercept page navigations — let browser handle them directly
  if (e.request.mode === 'navigate') return;
  var url = e.request.url;
  // Only cache same-origin static assets
  if (!url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(res) {
        if (res && res.ok) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, clone).catch(function(){}); });
        }
        return res;
      });
    })
  );
});
