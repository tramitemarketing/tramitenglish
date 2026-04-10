var CACHE = 'te-v1';
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
    })
  );
  self.skipWaiting();
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
  var url = e.request.url;
  if (url.includes('supabase') || url.includes('googleapis') || url.includes('jsdelivr')) {
    return; // never cache external resources
  }
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var net = fetch(e.request).then(function(res) {
        if (res && res.ok) {
          caches.open(CACHE).then(function(c) { c.put(e.request, res.clone()); });
        }
        return res;
      }).catch(function() { return cached; });
      return cached || net;
    })
  );
});
