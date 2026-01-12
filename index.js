self.addEventListener("install",e=>{
e.waitUntil(
caches.open("pnake").then(c=>c.addAll(["./","pnake.html","manifest.json"]))
);
});

self.addEventListener("fetch",e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
