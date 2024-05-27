const STATIC_CACHE = "static-v1";

const APP_SHELL = [
    "/",
    "index.html",
    "css/styles.css",
    "js/main.js",
    "img/logo.png",
    "pages/pagina de incio.html",
    "pages/bert.css",
    "pages/bert.html",
    "pages/bert.js",
    "pages/Construye alianzas.html",
    "pages/css pages.css",
    "pages/Diseña tu alcance.html",
    "pages/Explora tu mercado.html",
    "pages/l.png",
    "pages/Modelo de ingresos.html",
    "pages/Organiza tus recursos.html",
    "pages/seccion1.css",
    "pages/seccion2.css",
    "pages/seccion3.css",
    "pages/seccion4.css",
    "pages/seccion5.css",
    "pages/seccion1,js",
    "pages/seccion2,js",
    "pages/seccion3,js",
    "pages/seccion4,js",
    "pages/seccion5,js",

];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fetch! ", e.request);
    e.respondWith(
        caches
        .match(e.request)
        .then((res) => {
            return res || fetch(e.request);
        })
        .catch(console.log)
    );
    //   e.waitUntil(response);
});