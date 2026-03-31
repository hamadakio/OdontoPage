'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "233351c528b899ff25c6acec3016e675",
"assets/AssetManifest.bin.json": "e2891f16851405531ef9343f4d51f680",
"assets/AssetManifest.json": "45a759b336dd87ebdd58ae6b1d85fe63",
"assets/assets/images/brazil_flag.png": "c673c09d7d61f3ed04623c07ca17f8e6",
"assets/assets/images/eua_flag.png": "3d11bde4efe6b61bd72273c9691980ca",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/icones/icone_dente_de_leite.jpg": "c1df7329a850ac8e0540a36b29f29f60",
"assets/assets/images/icones/icone_dente_de_leite.png": "9a188f537664dafb079162374072b989",
"assets/assets/images/icones/icone_dente_permanente.jpg": "d17c88d922b4a3fcaeb36d71a9d1fd67",
"assets/assets/images/icones/icone_dente_permanente.png": "8e5c3c48172a61d9ae43a7ecb7569319",
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
"assets/assets/images/icones/idioma.png": "4d13fc9359815c2f8290de56f8e6460b",
"assets/assets/images/icones/referencias.png": "bce4a0ce3a84aaedc783344d40383c87",
"assets/assets/images/logo.png": "143b5858e4bb0d1ea3c3fbc8b10f5767",
"assets/assets/images/spain_flag.png": "8f7d598698de9f792d25bcf7c1a87ce9",
"assets/assets/images/traumas/1-1.jpg": "20e6f909b88992acca6bae597866daec",
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
"assets/assets/images/traumas/como_prevenir/1.jpg": "373213da42b1e563e214ba96253675f0",
"assets/assets/images/traumas/como_prevenir/2.jpg": "e80e5836baeae1459f1b03f19550461c",
"assets/assets/images/traumas/como_prevenir/3.jpg": "44db3b9bbbed281259a65a6e10a4cc2e",
"assets/assets/images/traumas/como_prevenir/4.jpg": "fd7858baa4bd05b3ef0ed26fe0747ca4",
"assets/assets/images/traumas/como_prevenir/5.jpg": "f7d0b684e964b20e8299f80be253eaa1",
"assets/assets/images/traumas/como_prevenir/6.jpg": "5aad2030c342cf1b8eb0f47573cd006a",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/ateracao_cor/1.jpg": "1a3d20f50a8dc94a43539a8d9af5d14f",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/ateracao_cor/2.jpg": "d2080ba533dc5189f52fd032ebc3dced",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/ateracao_cor/3.jpg": "a224746d235469813205231b84253759",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/reabsorcao_da_raiz/1.jpg": "65cf799f62af17c7bc96a24e2c8b4b7c",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/reabsorcao_da_raiz/2.jpg": "90b30c27107d0ba93daf8cdb091be46b",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/reabsorcao_da_raiz/3.jpg": "7f14c3e0aac59ced0309c67c2b497136",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/retencao_prolongada/1.jpg": "b5628e0ea81baaa93ec27a47320519d9",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/retencao_prolongada/2.jpg": "ee279922ecaff4f83f19a62eaa9e8a3f",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_de_leite/retencao_prolongada/3.jpg": "f7bb7dd4ed5f29fd20e8b98d1830fedb",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_permanentes/dilaceracao/1.jpg": "97688037ca61bd73f6667b31d9ea559b",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_permanentes/dilaceracao/2.jpg": "20f213b01cc0fb6d72b37da01e149dca",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_permanentes/hipomineralizacao/1.jpg": "7d005d39561e29d776ea8834a3ffe326",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_permanentes/hipomineralizacao/2.jpg": "b1c1d5e3f6993b4d122d70c5bdd39e10",
"assets/assets/images/traumas/consequencias_do_trauma/dentes_permanentes/hipoplasia/1.jpg": "39a42782d67c10a993f5e9eb72026204",
"assets/assets/images/urgencias/dente_entrou/1.jpg": "a50724e9d35f76a92fdaa1689255bcdf",
"assets/assets/images/urgencias/dente_entrou/2.jpg": "7f23e267c8c8076a2f2ba6cf8a55887c",
"assets/assets/images/urgencias/dente_entrou/3.jpg": "68c7295e2cc6ad4bf30a76c07e15f351",
"assets/assets/images/urgencias/dente_movimentou/1.jpg": "6663a558cdf3b6bfb3dcd3e0c24a3846",
"assets/assets/images/urgencias/dente_movimentou/2.jpg": "7be3ad9a17152b99d2fd50277493ed59",
"assets/assets/images/urgencias/dente_movimentou/3.jpg": "45449155a20d0b5a29a612d64d2988f2",
"assets/assets/images/urgencias/dente_movimentou/4.jpg": "d0f0df6dca425f6f3333a331f3a6aaa6",
"assets/assets/images/urgencias/dente_quebrou/1.jpg": "77c3f4f26b79ee3287d1ee22cc5cad49",
"assets/assets/images/urgencias/dente_quebrou/2.jpg": "1e6eecc2787e515c4f33de86357c3c13",
"assets/assets/images/urgencias/dente_quebrou/3.jpg": "7960c5f835fa8363e29b014abca2c5a5",
"assets/assets/images/urgencias/dente_saiu/1.jpg": "c23be0877632c2d3bffdcb052c298a54",
"assets/assets/images/urgencias/dente_saiu/2.jpg": "9ed7eaa8243d53d1e3556fb980c00584",
"assets/assets/images/urgencias/lesionou_machucou/1.jpg": "5333b83d398e4676abb373b7bc25e5f2",
"assets/assets/images/urgencias/lesionou_machucou/2.jpg": "0f923172eff60205377e955019da3273",
"assets/assets/images/urgencias/lesionou_machucou/3.jpg": "12a4eca3c8b372903700dbd25e3966e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "da7106b07df7b012cf121e37e1f8b4ca",
"assets/lib/l10n/app_en.arb": "a70da70a9bf7b1fcf6cac40c840fa9f0",
"assets/lib/l10n/app_es.arb": "6fa2f8b6907b8f8bb82feb8c4f6e77bc",
"assets/lib/l10n/app_pt.arb": "8f5c25adbb3e9787d6c01d9b520bd541",
"assets/NOTICES": "bd04b449fc39e2476a3e16ddd64fb6b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "013e0a66211e6e82bb8b575827b0d93d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d93bc2fc9586c6f42f95ebac4d81d4dc",
"/": "d93bc2fc9586c6f42f95ebac4d81d4dc",
"main.dart.js": "07f79b464a9a6f69f6f608181a72b059",
"manifest.json": "6f928b405c8aa75d7a165a893ba0001a",
"version.json": "f78127dbe081a523de6fc04f5003cf48"};
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
