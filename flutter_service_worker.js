'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7420df4e7383f1509016e93738d48215",
"version.json": "bcff5f8c6580042d8083c8e33d7c2c69",
"index.html": "1add6d1b082a676f44f2323374f17c5d",
"/": "1add6d1b082a676f44f2323374f17c5d",
"main.dart.js": "26e7b39b4408b6803f07ef889d395250",
"bundle.js": "2f232047934169513a9afb0307d1303f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3f3f3d1c38b97ba2bfcf3d73b04d8221",
"icons/Icon-192.png": "ca57d61283da468623d541b911f99f44",
"icons/Icon-maskable-192.png": "ca57d61283da468623d541b911f99f44",
"icons/Icon-maskable-512.png": "22bc5a485826faa3ac85f3426b320386",
"icons/Icon-512.png": "22bc5a485826faa3ac85f3426b320386",
"manifest.json": "5023294c524aecb3760d48c1641add09",
"bundle.js.LICENSE.txt": "ae5d7d8eacb2ec62afe553c727149a71",
"assets/AssetManifest.json": "c36cd9b3fcb4b810b4f6a1909c167edb",
"assets/NOTICES": "450831569babf04c8ccffe5add93c85d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "2d3b060d52cfb269d0239401df32e724",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/hive_flutter_kit/web/hiveflutterkit.js": "bddb682939b3134a2bb0f7c2478b68fe",
"assets/packages/hive_flutter_kit/assets/images/vote_logo.png": "bde019aaa0fdfd5735c9cd0cf5788aef",
"assets/packages/hive_flutter_kit/assets/images/banner.jpg": "4e19230a33e010e7f8fc6b62c4d21489",
"assets/packages/hive_flutter_kit/assets/images/hive-stats.png": "a5c41f1c933d785f55dd2d1b2e2fcf5d",
"assets/packages/hive_flutter_kit/assets/images/hiveauth_icon.png": "7bc215ae2c73a4876f08b02398612b44",
"assets/packages/hive_flutter_kit/assets/images/hive_inbox_logo.png": "65521371a0b1f11e42920a69b2ba074d",
"assets/packages/hive_flutter_kit/assets/images/hifind_logo.png": "8195532e1781f1ac5140190fe5d4a2dc",
"assets/packages/hive_flutter_kit/assets/images/logo.png": "7038dd786f83d43efcd6fc232f2fdd22",
"assets/packages/hive_flutter_kit/assets/images/donate_logo.png": "4cd9d425f163c2ab77ef5dde124086a0",
"assets/packages/hive_flutter_kit/assets/images/contribution.png": "80295c484b1dd2b1c1c377820e5aae21",
"assets/packages/hive_flutter_kit/assets/images/hive-keychain-logo.png": "3071fd0e938c2f73dd933718d26a743e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "959a2bb956aa3b8b6e3bfb3aa0e84f3e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/Polkadot_logo.png": "abae6ed4024bede2319e6b7fadf76b4b",
"assets/assets/metamask.png": "b519306585daa8b7b26d77a369ee2c04",
"assets/assets/dashcoin_logo.png": "990a0a3b931790195f0a376c746eea8a",
"assets/assets/hiveauth_icon.png": "7bc215ae2c73a4876f08b02398612b44",
"assets/assets/hive_auth_button.png": "880488807e3d1d393220afd22c1b58d5",
"assets/assets/world_coin_logo_text.png": "22506ffd36b7544b94d545a05501a4a6",
"assets/assets/distrion-white-logo.png": "acecb4c0bd53926833a54e715ca2e935",
"assets/assets/landing_page_phone.png": "07c5b5b05471a1bb4057afb953c8c09f",
"assets/assets/hive-keychain-image.png": "417047f02fc82ae6cf4ac06f88d4c04a",
"assets/assets/distriator_text_logo.png": "debd5f3e2b271ce19940fc378115c463",
"assets/assets/app-icon.png": "b838cf5051ce1aac48a87e1a11dc02e9",
"assets/assets/doc_logo.png": "c86b6229a602b67e615201684a82ec00",
"assets/assets/Polkadot_logo.webp": "7a75639cf4595bd707a1f7221489e239",
"assets/assets/green-marker.png": "6da86224700fff9884680cb5d67704f2",
"assets/assets/red-marker.png": "fe818fdc36df2e3703726e3ebded3287",
"assets/assets/hive_logo.png": "eb70b4860ddab728a7bcf87b41bc2ce7",
"assets/assets/hbd-logo.png": "0bebe3289704d6ffd052419f5e6b7814",
"assets/assets/sats-logo.png": "2ea6424befa9e7e6a0e694a2182aed6a",
"assets/assets/world_coin_logo.png": "fd7ead3b04eecd57b877c167c50946d4",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
