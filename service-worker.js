self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});
 
const STATIC_DATA = [
  'index.html',
  'style.css',
  'main.js',
  'question.js',
  'stations.js',
  'info.png',
  'setting.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
   caches.open('cache_v1').then(function(cache) {
     return cache.addAll(STATIC_DATA);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});