// Cache names
const CACHE_NAME = 'devportfolioai-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

// Assets to cache
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/favicon-16x16.svg',
  '/favicon-32x32.svg',
  '/manifest.json',
  '/apple-touch-icon.png',
  '/images/logo.svg',
  '/team/ajay.jpg',
  '/team/madhuri.jpg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (event.request.mode === 'navigate' || 
      (event.request.method === 'GET' && 
       event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).catch(() => {
        return caches.match('/index.html');
      })
    );
    return;
  }

  // Cache-first strategy for static assets
  if (event.request.url.match(/\.(js|css|svg|jpg|jpeg|png|gif|webp)$/)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(RUNTIME_CACHE).then((cache) => {
          return fetch(event.request).then((response) => {
            // Put a copy of the response in the runtime cache
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      }).catch(() => {
        // If both cache and network fail, return a simple offline message for HTML
        if (event.request.headers.get('accept').includes('text/html')) {
          return new Response('You are offline. Please check your internet connection.', {
            headers: { 'Content-Type': 'text/html' }
          });
        }
        // For other resources, just return a 404-like response
        return new Response('Not found', {
          status: 404,
          statusText: 'Not found'
        });
      })
    );
    return;
  }

  // Network-first strategy for API requests
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Default: network with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache a copy of the response
        return caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});