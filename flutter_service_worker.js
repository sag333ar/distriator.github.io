'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c21a00b9cc79b763c067ef921aee3b0d",
"version.json": "335e3f3c233df3ec8a0e9e6ddf01bc3f",
"index.html": "d0ef037b6705b7111db2cf7747e02346",
"/": "d0ef037b6705b7111db2cf7747e02346",
"CNAME": "9afb97fdc9601538f9cdec597fd7820a",
"main.dart.js": "72f362acbeb4af8e8fde13b38ff0164e",
"bundle.js": "2f232047934169513a9afb0307d1303f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "3f3f3d1c38b97ba2bfcf3d73b04d8221",
"icons/Icon-192.png": "ca57d61283da468623d541b911f99f44",
"icons/Icon-maskable-192.png": "ca57d61283da468623d541b911f99f44",
"icons/Icon-maskable-512.png": "22bc5a485826faa3ac85f3426b320386",
"icons/Icon-512.png": "22bc5a485826faa3ac85f3426b320386",
"manifest.json": "5023294c524aecb3760d48c1641add09",
"bundle.js.LICENSE.txt": "ae5d7d8eacb2ec62afe553c727149a71",
".git/config": "3a891d199f30fdff1d1d70b1078a4fb8",
".git/objects/be/3e6a90b234999fd445d4bd38256330121c9cf6": "2dfedbdf10cb61ed1d1a9eed1d5be9a1",
".git/objects/a2/f968c46676adba5b382b966e5d5efed9c8844f": "d42cf7afb3b1669997d0b54a1ba2111e",
".git/objects/pack/pack-386c1ca4209c9d43bf495169fa29bc3c59731bee.idx": "e0cf62056c31b97aeebb68615bbe80ca",
".git/objects/pack/pack-386c1ca4209c9d43bf495169fa29bc3c59731bee.pack": "758c2a4769609fd4e515ab8e7356f033",
".git/objects/28/2089e3428dfa42f76475dc8063f5bf339ce58f": "4dad17162897d9d4d59881d1a7f2fc15",
".git/objects/bf/acdbcd23368cf03e5e63f913589ccf5f700296": "de8ad49879b37ff90483df628ac3de01",
".git/objects/f9/7bd783d4ee58c0586918e95c451ce46985438b": "3e449eec1e8c297f5472ef99b00b373f",
".git/objects/e8/8d3141925957e4f637c3b5ba5d803c3ff13796": "da4000607ac4610f750a5362cdea2db2",
".git/objects/1b/f8ed1a8030390f9e6ea1c3d0cf1ecff6d78a01": "d2bc372285e9d18da436257c2b6d2292",
".git/objects/85/1bca5d6aead7b3a1fe58801dae9cf113815d58": "89ee4c6553f482fd68de53a9d21f39b6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a905cb267836b1a9ae860bd00b7873f",
".git/logs/refs/heads/main": "4a905cb267836b1a9ae860bd00b7873f",
".git/logs/refs/remotes/origin/main": "544ca2747f7ff9cd9bd413a738a458ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1f634bd600e274e50ac61b599bc7899f",
".git/refs/remotes/origin/main": "1f634bd600e274e50ac61b599bc7899f",
".git/index": "5aa60b831755ee5e48a9c220d72ba859",
".git/FETCH_HEAD": "64a4a9307b8a0e92085886f0c633358a",
".git/sourcetreeconfig": "aa166020ff583a1f9ddbc4c46e95e7f1",
"assets/AssetManifest.json": "2b2dbfb7732956678509bb57748df62c",
"assets/NOTICES": "232d8575615e5fa5d5c9630a260fa52f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "23c11a62b35c377e4bf1a8f117513218",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "70b2c5ad0bc7a610276f08421ab85cee",
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
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
