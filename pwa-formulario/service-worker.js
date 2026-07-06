// Service worker mínimo: solo cachea la "pantalla de inicio" de la app
// (esto es lo que permite que sea instalable). NO cachea ni intercepta
// el formulario de Microsoft: esas peticiones van siempre a la red.

const CACHE_NAME = 'formulario-app-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Solo manejamos peticiones al propio origen de la app (el app shell).
  // Todo lo demás (forms.office.com, login.microsoftonline.com, etc.)
  // pasa directo a la red sin tocarlo.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
