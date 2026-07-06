// Service worker: cachea la "pantalla de inicio" para que sea instalable,
// pero SIEMPRE intenta traer la versión más nueva desde internet primero
// (network-first). Solo usa la copia guardada si no hay conexión.
// NO cachea ni intercepta el formulario de Microsoft: esas peticiones
// van siempre directo a la red.

const CACHE_NAME = 'formulario-app-v2'; // 👉 sube este número cada vez que cambies index.html
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

  // Todo lo que no sea del propio sitio (forms.office.com, login de
  // Microsoft, etc.) pasa directo a la red, sin tocarlo.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
