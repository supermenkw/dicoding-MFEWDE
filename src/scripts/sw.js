import 'regenerator-runtime/runtime'
import {precacheAndRoute} from "workbox-precaching/precacheAndRoute";
import {registerRoute} from "workbox-routing/registerRoute.mjs";
import {StaleWhileRevalidate, CacheFirst, NetworkFirst} from "workbox-strategies";
import{ ExpirationPlugin } from 'workbox-expiration';
import {clientsClaim, skipWaiting} from "workbox-core";
import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST, {
    ignoreURLParametersMatching: [/.*/]
});

registerRoute(
    new RegExp(/^https:\/\/dicoding\-restaurant\-api\.el\.r\.appspot\.com(?!\/(images|review))/),
    new NetworkFirst({
        cacheName: 'api-response',
        plugins: [{
            maxAgeSeconds: 60 * 60 * 24 * 7
        }]
    })
);

registerRoute(
    new RegExp(CONFIG.BASE_IMAGE_URL),
    new StaleWhileRevalidate({
        cacheName: 'api-images',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 30,
                maxEntries: 20,
            })
        ]
    })
); 

clientsClaim();
skipWaiting();