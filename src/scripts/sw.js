import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting } from 'workbox-core';
import CONFIG from './globals/config';

// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST, {
    ignoreURLParametersMatching: [/.*/],
});

registerRoute(
    // eslint-disable-next-line no-useless-escape
    new RegExp(/^https:\/\/dicoding\-restaurant\-api\.el\.r\.appspot\.com(?!\/(images|review))/),
    new StaleWhileRevalidate({
        cacheName: 'api-response',
        plugins: [{
            maxAgeSeconds: 60 * 60 * 24 * 7,
        }],
    }),
);

registerRoute(
    new RegExp(CONFIG.BASE_IMAGE_URL),
    new StaleWhileRevalidate({
        cacheName: 'api-images',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 30,
                maxEntries: 20,
            }),
        ],
    }),
);

registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new CacheFirst({
        cacheName: 'font-google',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 20,
            }),
        ],
    }),
);

skipWaiting();
