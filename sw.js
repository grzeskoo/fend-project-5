// Credit: https://github.com/calaca/feand-restaurant-reviews

let cacheName = 'v1.0';

const cacheFiles = [
  '/',
  '/index.html',
  '/css/master.css',
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

self.addEventListener('install', e => {
  console.log('serviceWorker installation: Success');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('serviceWorker is caching files...');
      return cache.addAll(cacheFiles);
    })
    .catch(err => {
      console.log('Error while caching files. Error: ', err);
    })
  );
});

self.addEventListener('activate', e => {
  console.log('serviceWorker activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(name => {
        if(cacheName !== name) {
          console.log('serviceWorker is removing old cache...');
          return caches.delete(name);
        }
      }));
    })
    .catch(err => {
      console.log('Error while removing old cache. Error: ', err);
    })
  );
});

self.addEventListener('fetch', e => {
  console.log('serviceWorker is fetching content...');
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if(res) {
          console.log('serviceWorker found content in cache. Url: ', res.url);
          return res;
        }
        return fetch(e.request);
      })
      .catch(err => {
        console.log('Error while fetching data. Error: ', err);
      })
  );
});