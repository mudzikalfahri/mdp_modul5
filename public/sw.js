if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UJ_Kjrk_wepfMwuLKssWA/_buildManifest.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/UJ_Kjrk_wepfMwuLKssWA/_ssgManifest.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/framework-64eb7138163e04c228e4.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/main-22b8da49a1a363fbd457.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/pages/_app-13a969fda80fb6097e5c.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/pages/index-76f05b68558c65f520e7.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/chunks/webpack-6aa24242c38afc8913a0.js",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/_next/static/css/ed0e028e07dd0f944ba0.css",revision:"UJ_Kjrk_wepfMwuLKssWA"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"36ccef346fae5b35101c22c91f455e53"},{url:"/icon-256x256.png",revision:"97453c4cca84f86d5900a5d79bb1d0ce"},{url:"/icon-384x384.png",revision:"86d00831fddac60e15c60256fa772f48"},{url:"/icon-512x512.png",revision:"6a73b9db3d4e056844144c1e96bf80b1"},{url:"/manifest.json",revision:"10704f4ece9c9fcdb8f1a16b7a33b96b"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
