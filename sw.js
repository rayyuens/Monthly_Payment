const CACHE_NAME = 'roomiepay-v1';
const ASSETS = [
  './',
  './index.html',
  'https://raw.githubusercontent.com/rayyuens/Monthly_Payment/main/Icon-1024_R.png'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Network first, fallback to cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
