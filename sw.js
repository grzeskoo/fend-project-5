// Credit: https://developers.google.com/web/fundamentals/primers/service-workers/

//=================
// Variables
//=================
// Cache name
const CACHE_NAME = 'cache-rr-v1.0';

// Things to cache
const CACHE_ITEMS = [
  '/',
  '/js/sw_register.js',
  '/index.html',
  '/restaurant.html',
  '/css/main.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
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
];

//=================
// Install serviceWorker
//=================
self.addEventListener('install', e => {
  e.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(CACHE_ITEMS);
    })
    .catch(err => {
      console.log(`Error caching files. ${err}`);
    })
  );
});

//=================
// Update serviceWorker
//=================
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
    .then(cacheNames => {
      return Promise.all(cacheNames.map(name => {
        if (CACHE_NAME !== name) return caches.delete(name);
      }));
    })
    .catch(err => {
      console.log('Error removing old cache.', err);
    })
  );
});

//=================
// Retrieve cache
//=================
self.addEventListener('fetch', e => {
  e.respondWith(
    caches
    .match(e.request, {
      // Ignores query string in URL
      // https://developer.mozilla.org/en-US/docs/Web/API/Cache/match#Parameters
      ignoreSearch: true
    })
    .then(response => {
      if (response) return response;
      return fetch(e.request);
    })
    .catch((err) => {
      console.log(`Error fetching data. ${err}`);
    })
  );
});