const CACHE_NAME = 'fangkalender-pwa-cache-v1';
const URLS_TO_CACHE = [
  'index.html', // or '.' if index.html is the main entry point from this directory
  'manifest.json',
  'images/icon-16x16.png',
  'images/icon-32x32.png',
  'images/icon-72x72.png',
  'images/icon-96x96.png',
  'images/icon-144x144.png',
  'images/icon-152x152.png',
  'images/icon-192x192.png',
  'images/icon-384x384.png',
  'images/icon-512x512.png'
  // Add any other specific files from PWA/images like favicon.ico or apple-touch-icon.png if desired
  // For now, sticking to the numbered 'icon-NxN.png' files as per latest user feedback.
];

// Install event: opens the cache and adds core files to it.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(err => {
        console.error('Failed to open cache or add files during install:', err);
      })
  );
});

// Activate event: cleans up old caches.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('ServiceWorker: clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: serves assets from cache first, falls back to network.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - fetch from network, and cache it
        return fetch(event.request).then(
          networkResponse => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        ).catch(error => {
          console.error('ServiceWorker fetch error:', error);
          // Optionally, you could return a custom offline page here if the fetch fails
          // and the item is not in cache. For example:
          // if (event.request.mode === 'navigate') { // If it's a page navigation
          //   return caches.match('offline.html'); // You would need an offline.html cached
          // }
        });
      })
  );
});
