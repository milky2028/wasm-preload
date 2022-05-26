const CACHE_NAME = "tsg";

async function cacheOrNetwork(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request, { ignoreVary: true });

  if (cachedResponse) {
    return cachedResponse;
  }

  const fetchedResponse = await fetch(request);
  cache.put(request, fetchedResponse.clone());

  return fetchedResponse;
}

async function preCacheWasm() {
  const cache = await caches.open(CACHE_NAME);
  return cache.add("./add.wasm");
}

self.addEventListener("install", (event) => {
  event.waitUntil(preCacheWasm());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheOrNetwork(event.request));
});
