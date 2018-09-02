// Credit: https://developers.google.com/web/fundamentals/primers/service-workers/

//=================
// Variables
//=================
// Cache name
let cacheName = 'v1.0';

// Things to cache
let cacheItems = [
  '/',
  '/index.html',
  '/css/main.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js'
];

//=================
// Install serviceWorker
//=================
self.addEventListener('install', e => {
  // console.log('ServiceWorker installation: Success');
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      // console.log('ServiceWorker opened cache');
      return cache.addAll(cacheItems);
    })
    .catch(err => {
      console.log('Error caching files.', err);
    })
  );
});

//=================
// Retrieve cache
//=================
self.addEventListener('fetch', e => {
  // console.log('ServiceWorker is fetching content...');
  e.respondWith(
    caches.match(e.request)
    .then(response => {
      if (response) {
        // console.log('ServiceWorker found content in cache. Url: ', response.url);
        return response;
      }
      return fetch(e.request);
    })
    .catch(err => {
      console.log('Error fetching data.', err);
    })
  );
});

//=================
// Update serviceWorker
//=================
self.addEventListener('activate', e => {
  // console.log('ServiceWorker activated');
  e.waitUntil(
    caches.keys()
    .then(cacheNames => {
      return Promise.all(cacheNames.map(name => {
        if (cacheName !== name) {
          console.log('ServiceWorker is removing old cache...');
          return caches.delete(name);
        }
      }));
    })
    .catch(err => {
      console.log('Error removing old cache.', err);
    })
  );
});