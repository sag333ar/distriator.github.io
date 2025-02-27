'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a12c9fee03d5b058376d7091fac4e37c",
"version.json": "53abaf17b48b0c013532c9e137fc006c",
"index.html": "98d9c2254606b14c4954606dfc91c1f9",
"/": "98d9c2254606b14c4954606dfc91c1f9",
"main.dart.js": "7af51ffb03a1c42c54cb00b2d3814b54",
"bundle.js": "2f232047934169513a9afb0307d1303f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "3f3f3d1c38b97ba2bfcf3d73b04d8221",
"icons/Icon-192.png": "ca57d61283da468623d541b911f99f44",
"icons/Icon-maskable-192.png": "ca57d61283da468623d541b911f99f44",
"icons/Icon-maskable-512.png": "22bc5a485826faa3ac85f3426b320386",
"icons/Icon-512.png": "22bc5a485826faa3ac85f3426b320386",
"manifest.json": "5023294c524aecb3760d48c1641add09",
"bundle.js.LICENSE.txt": "ae5d7d8eacb2ec62afe553c727149a71",
".git/config": "de53cd7af36eb3c6faa9812c298f16ce",
".git/objects/50/8f989d95695210b26e8efb8b64ae6df03163de": "1cfc97b7691659e497a303e19ef2c5f4",
".git/objects/50/80dca0af834de440abe0b93e6a47e608c26724": "8886528a12913afc42f6486af9557c59",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/58/b6caf7a0503223a5b6996cd716f4e4e36f7820": "adbd79c9f614fd6ef5b69650a348ee60",
".git/objects/0b/1b40d485ee26c6c542f5e2a7f302cbeff82bad": "c997be7d5af22d9f1aef73efd50318cd",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/209d82710930cec001c5691a0fa57f221de8c9": "7f72b9f7440fe0f95e6208d2519f9b26",
".git/objects/5f/e54500b1d51be68aa481c32dcf0a8316d119e6": "493f18395047b988fa250cc4ff1333e7",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b3/2d94fcbbb3cb65e3f2a34f11c46062af453400": "e7cc20e5078ff0d884ba37804a606bbd",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c7/953751257b00fde655974984cbe2bb68c00f8d": "6bcf8480d0e5cea749add27df1456cc2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/2ed704dfde870c91878d3a054a50160b249174": "7d78ad8ebae8d12b945629214b240dbf",
".git/objects/fb/8fd2305dd20b5fc3d433babeec3c26db40e9e8": "3ea492c029ecf4b299cebe3d7f6c7034",
".git/objects/29/03e5f28b7ee885e9cce17e30c6fd6aebb66e3e": "c31e611eb8c0f9af4c19d3268e1c7e8b",
".git/objects/74/328a128d4b7138ebad849feb462a04f0cb2e87": "5e64861e4badf2e42a44c84a8fdd2f24",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/613f3b3d694b189bca0d470ef3341aaf968c5c": "871b259528169915250154072ca22916",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/cfd52463c2348564dbf7e014767b680e6c1f52": "e521034a6aa425b07134ce3ef2a3ce5d",
".git/objects/6e/fc963c533ea122f1c7a071b971f0d05a47defa": "f9022fcce29c530616d1481d946c7ba3",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/00f12befda5f1a53dbb8da67586ec8093cba02": "194569b91ba9e44e102e4f7710917adf",
".git/objects/65/22ae8e036e714055eeff5aaa385deb18d1804b": "4cc536ed15d25a0de296605692bf7b65",
".git/objects/54/e9bb9eca37fe7c75a8a62ae9d407df1c0f372e": "83c1097e33ade510b64a6514d4c7caea",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/3f/dc0af392a8cd04aae390ea980b6ec49005ff04": "63594e4ceda3e5f23e51d5d4d1813a88",
".git/objects/5e/cdcfb0bd63a10fd3015f44bd72ea7a985b3ffe": "85edd33a30a99c70a0b7968b00684c12",
".git/objects/99/0d96db85b263974c2dc29debb7be004044e540": "1a1084af9d51b11c17b056b2e763e1c1",
".git/objects/52/e6dad7e85b93a3ab38a5c1985e47ca509e68c7": "484252a3a1816e6a9b25eb39d3604aeb",
".git/objects/90/79c59c04e67d4ac6519d076b732b0453dba1d3": "5569fd86447092da66d10d97056ebda0",
".git/objects/d3/afe86ed2027f3a60c27ba1385787df4da191e8": "d413c897310adbcad70ae7e6ed3f7384",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/fd94ad435a4dbf9745b67ac0a0b5ed8d34acb2": "4071e143c8b9254392bab25d9370bc85",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/3ac86511761cb5904f371e63ab8f96e31a1283": "5f8a21fafe93f99b39756828ce31d03d",
".git/objects/a6/d8330ef3784aedaf67ef52736fb249f5953362": "0797bce62ff20438ce10a1fb402b49ba",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/d5c6d68c6358b7a5db8d18e5f7641fcd3ef145": "0739244337707751d5eb7ee0683c212c",
".git/objects/ea/787e1d73a9256ed677cdb651b46b0b92ee0ecc": "ab32b96ee8acb21c40d86b8c3c1ddfa9",
".git/objects/f7/d62868b64216e2e0b4d2a66340a38a3773538d": "fc02f80a657ecede4ed97d997642df28",
".git/objects/f7/d1e9a210fd0c304d2d8dea2a5eaa310627e5b8": "c0cc48f85c422ee6fbb186d5252f0739",
".git/objects/c5/bfe873ede8810b4d70eaccaefa21cc81d29869": "930dc7f57ffd776aa43c3f519b41996f",
".git/objects/f6/0315cfb49b5013453fcebca41fb832889e22a1": "f41ff279e140ab7f99f2368698eaa178",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/3b25508d1686c893ece67f46db70e0831b3e02": "db246fe5a247ac1ec8e4085051d6ebce",
".git/objects/41/e000474cb6d74666008974d94f5d123fe4db26": "e95634788600d166e167320ac7d4ece5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/7caf3e077be264767dc41980450be89a43da40": "91df9c9381e4cc94e09532c74e823b6f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/82/097a9adb1fdac69e3c7568c46519b4bba9e58d": "834b7350420790d1b1459d7a66dab216",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/8b/412ca3cb04e2e44a5246a51745f91708fd1c4e": "81f552ea8857dd27bc57d46ef9e557d0",
".git/objects/7f/a9e7957062542f28b58c32496efb7ef9cf7761": "d29408dddc6618a82353dc55ead185f2",
".git/objects/25/31a2d3c94cb242f51a94957a905a1191c300ba": "027bcea17f2a5bcd904eab018335ac22",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fd1b587d1a361ca22f7c81155b624e8c",
".git/logs/refs/heads/main": "fd1b587d1a361ca22f7c81155b624e8c",
".git/logs/refs/remotes/origin/main": "6ff5d77de33b1c9732f287efed7b1cec",
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
".git/refs/heads/main": "b40845dc93a5d1a3695216e1ad275cf3",
".git/refs/remotes/origin/main": "b40845dc93a5d1a3695216e1ad275cf3",
".git/index": "e88baae43e34f07b53b557257982ec0e",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "09733ae998ad88411824a63be618c2c1",
"assets/NOTICES": "232d8575615e5fa5d5c9630a260fa52f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f9d12d505d12a211239845bc77b231ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e38f9b87e7f13394615351fcd3e8962f",
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
