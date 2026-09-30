const CACHE_NAME = 'fake-weather-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@1.49.0/dist/umd/lucide.min.js'
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ時の処理（キャッシュファースト、フォールバック）
self.addEventListener('fetch', (event) => {
  // APIリクエスト（位置情報）はネットワークファースト
  if (event.request.url.includes('nominatim.openstreetmap.org')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // オフライン時は位置情報取得をスキップ
          return new Response(JSON.stringify({ address: {} }), {
            headers: { 'Content-Type': 'application/json' }
          });
        })
    );
    return;
  }

  // ページ本体はネットワークファースト（更新を確実に反映し、オフライン時はキャッシュ）
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() =>
          caches.match(event.request)
            .then((cached) => cached || caches.match('./index.html'))
        )
    );
    return;
  }

  // その他のリソースはキャッシュファースト
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then((response) => {
            // 有効なレスポンスのみキャッシュ（同一オリジン・CORS対応のCDN）
            if (!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors')) {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});
