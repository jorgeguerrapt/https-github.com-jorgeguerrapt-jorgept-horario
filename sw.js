
const CACHE_NAME = "ptal-shell-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
      const copy=resp.clone();
      if(new URL(event.request.url).origin===location.origin){
        caches.open(CACHE_NAME).then(c=>c.put(event.request,copy)).catch(()=>{});
      }
      return resp;
    }).catch(()=>cached))
  );
});
