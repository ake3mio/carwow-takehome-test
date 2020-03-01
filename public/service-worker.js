importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.setConfig({
    debug: true
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();

const daysToSeconds = days => days * 24 * 60 * 60;
const thirtyDaysInSeconds = daysToSeconds(30);
const halfDayInSeconds = daysToSeconds(.5);
const oneYearInSeconds = daysToSeconds(365);

workbox.routing.registerRoute(
    '/',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'home-page',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: thirtyDaysInSeconds,
            })
        ]
    })
);

workbox.routing.registerRoute(
    '/favicon.png',
    new workbox.strategies.CacheFirst({
        cacheName: 'favicon',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: thirtyDaysInSeconds,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('/static/*'),
    new workbox.strategies.CacheFirst({
        cacheName: 'static-page',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: thirtyDaysInSeconds,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('/cars/*'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'car-page',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: thirtyDaysInSeconds,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('.*\\.css'),
    new workbox.strategies.CacheFirst({
        cacheName: 'css-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: oneYearInSeconds
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('.*\\.js'),
    new workbox.strategies.CacheFirst({
        cacheName: `js-cache`,
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: oneYearInSeconds
            })
        ]
    })
);
workbox.routing.registerRoute(
    new RegExp('.*\\.js.map'),
    new workbox.strategies.CacheFirst({
        cacheName: `js-map-cache`,
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: oneYearInSeconds
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://warm-dawn-92320.herokuapp.com/models/.*'),
    new workbox.strategies.CacheFirst({
        cacheName: 'api-models-cache',
             maxAgeSeconds: halfDayInSeconds
    })
);

workbox.routing.registerRoute(
    'https://warm-dawn-92320.herokuapp.com/models',
    new workbox.strategies.CacheFirst({
        cacheName: 'api-models-cache',
             maxAgeSeconds: halfDayInSeconds
    })
);
