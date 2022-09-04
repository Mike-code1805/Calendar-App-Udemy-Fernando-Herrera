importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

const cacheFirstNetwork = [
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css',
];

registerRoute(({ request, url }) => {
  if (cacheFirstNetwork.includes(url.href)) return true;
  return false;
}, new CacheFirst());
