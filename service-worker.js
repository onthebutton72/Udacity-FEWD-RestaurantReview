/**
 * Obtained some code from https://developers.google.com/web/fundamentals/primers/service-workers/
 * and https://github.com/ireade/boilerplate-service-worker
 */

var cacheName = 'my-site-cache-v1';

self.addEventListener('install', function(event) {
	console.log("Service Worker installed")

	var urlsToCache = [
		'/',
		'/css/styles.css',
		'/data/restaurants.json',
		'/js/dbhelper.js',
		'/js/main.js',
		'/js/restaurant_info.js',
		'index.html',
		'restaurant.html',
		'/restaurant.html?id=1',
		'/restaurant.html?id=2',
		'/restaurant.html?id=3',
		'/restaurant.html?id=4',
		'/restaurant.html?id=5',
		'/restaurant.html?id=6',
		'/restaurant.html?id=7',
		'/restaurant.html?id=8',
		'/restaurant.html?id=9',
		'/restaurant.html?id=10'
		];

		event.waitUntil(
		caches.open(cacheName)
		.then(function(cache) {
			console.log('Opened cache');
		  	return cache.addAll(urlsToCache);
		  })
		.catch(function(error) {
			console.log("Service Worker installation failed")
		})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
        	console.log("Service Worker found in cache")
        	return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
	console.log("Service Worker activated")
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
        	if (thisCacheName !== cacheName){
        		console.log("Service Worker removing cached file from " + thisCacheName);
        	    return caches.delete(thisCacheName);
    	    }
        })
      );
    })
  );
});