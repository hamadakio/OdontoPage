'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3678bb7608b38dc50b7ba3b1e8699df8",
"assets/AssetManifest.bin.json": "b5f32679bdef6753a9fd444617c660ef",
"assets/AssetManifest.json": "c12f420417d28c1dfb239fa35f2f6b3d",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/icones/icon_boca_aberta.png": "2584e2cbc7e9fe58e69187c6edf387be",
"assets/assets/images/icones/icon_care_dente.png": "1077b2858eaabff890d70b3127b21de6",
"assets/assets/images/icones/icon_coroa_raiz.png": "7a21a5baebd2f91a7c0b76c8e26800e6",
"assets/assets/images/icones/icon_dente_care.png": "d1114a9970969a97040a871375800e26",
"assets/assets/images/icones/icon_dente_movendo.png": "e0d7003b9d9a19769b2844ab1f715542",
"assets/assets/images/icones/icon_dente_safe.png": "2dd84ef983a201ec8d21cff3363ebb1c",
"assets/assets/images/icones/icon_dentista.png": "a9f2d1cfb995c175d1df997da61fb398",
"assets/assets/images/icones/icon_idioma.png": "efa73fdf21d4df4466482aa3bf95e02b",
"assets/assets/images/icones/icon_lupa.png": "d615fbd8e8e8d2c07605f4b6c8caf39a",
"assets/assets/images/icones/icon_morder_dente.png": "fd6eab02d1e9c27231a43f1c8ab37a87",
"assets/assets/images/icones/icon_pressao.png": "a3f275d0ac5fa975a5de0468b3e27376",
"assets/assets/images/icones/icon_repo_dente.png": "1d223b81b1fa7d93ff7204312bd51986",
"assets/assets/images/icones/icon_sair.png": "d15890b67316c57a634e1e2e113dfb30",
"assets/assets/images/icones/icon_sirene.png": "4b93bf6cbb41bec190312954901c811f",
"assets/assets/images/icones/icon_sirene_atencao.png": "7b8dd5dc043f3a9a9339cb73946a1814",
"assets/assets/images/icones/icon_voltar.png": "565d43366dbc6c35a5ff81630c804c42",
"assets/assets/images/logo.jpg": "716493902bbe02d82a303d5f0cbd4f81",
"assets/assets/images/logo.png": "143b5858e4bb0d1ea3c3fbc8b10f5767",
"assets/assets/images/logo2.png": "7d3632ba3ca6ea7738d3164b52ee50c8",
"assets/assets/images/traumas/1.jpeg": "2eb86d7a67cca97d457e9a7c04fbc00b",
"assets/assets/images/traumas/10.jpeg": "8fd26ab767bcb9fb589eb9c604d6323f",
"assets/assets/images/traumas/11.jpeg": "3d90f6b2fd2ccf09276edc229ceecf29",
"assets/assets/images/traumas/12.jpeg": "763c0559fb31c3557181b7b3b841db15",
"assets/assets/images/traumas/2.jpeg": "6d32874589981d5db083f75d5ece6edc",
"assets/assets/images/traumas/3.jpeg": "1b9a7f6a90193f5237601be5b9a8387a",
"assets/assets/images/traumas/4.jpeg": "43e8b6215224719770060b7f6db2e2f2",
"assets/assets/images/traumas/5.jpeg": "84343e94093514ae5e0175444cbf48b9",
"assets/assets/images/traumas/6.jpeg": "07f80e5bafc1c781a91f672b88e5b936",
"assets/assets/images/traumas/7.jpeg": "e8fe26f3bdd2baee514b7d3d8625b262",
"assets/assets/images/traumas/8.jpeg": "48d251c17be007390c1b77c8e59f0eb8",
"assets/assets/images/traumas/9.jpeg": "ea04b69352a2f7d139a59c0fa37a11e6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/lib/l10n/app_en.arb": "30a5a1a8c24c6341cb72983bf8cc5d21",
"assets/lib/l10n/app_es.arb": "20c97f9f4e02df957f5d381cb0d60559",
"assets/lib/l10n/app_pt.arb": "0bd43b31e75b1e81f430b1f467038f4c",
"assets/NOTICES": "97fac43230fb9aa6929525e1a8712378",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "11e315b3ebd28c06d2d6c197745c93e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "759093894e00d9be8dac1af8e26ccb8a",
"/": "759093894e00d9be8dac1af8e26ccb8a",
"main.dart.js": "886c251ba8fb8dd8c1475b7b2f98851a",
"manifest.json": "e41fb7bed18a6988aa1f97d329aa9951",
"version.json": "5772076f926371744336ca7f2d1d4685"};
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
