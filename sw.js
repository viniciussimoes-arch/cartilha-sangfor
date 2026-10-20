/* Service Worker da Cartilha Comercial Sangfor
   Faz a cartilha funcionar OFFLINE (cache dos arquivos).
   IMPORTANTE: ao atualizar a cartilha, troque o número da versão em CACHE_NOME
   (ex: v1 -> v2). Isso força os aparelhos a baixarem a versão nova. */
const CACHE_NOME = "cartilha-sangfor-v1";

/* Arquivos essenciais para a cartilha abrir sem internet */
const ARQUIVOS = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./app.js",
  "./manifest.webmanifest",
  "./logo.png",
  "./icon-192.png",
  "./icon-512.png"
];

/* Instalação: baixa e guarda os arquivos no cache */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NOME).then(cache =>
      /* addAll falha se um arquivo não existir; por isso adicionamos um a um
         e ignoramos os que faltarem (ex: logo.png ou ícones ainda não enviados) */
      Promise.all(ARQUIVOS.map(url =>
        cache.add(url).catch(() => null)
      ))
    ).then(() => self.skipWaiting())
  );
});

/* Ativação: remove caches antigos de versões anteriores */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(nomes =>
      Promise.all(nomes.filter(n => n !== CACHE_NOME).map(n => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

/* Busca: responde do cache primeiro (rápido/offline) e atualiza em segundo plano.
   Só trata requisições GET do mesmo site. */
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // ignora recursos externos (ex: fontes)

  event.respondWith(
    caches.match(req).then(cacheado => {
      const rede = fetch(req).then(resp => {
        if (resp && resp.status === 200) {
          const copia = resp.clone();
          caches.open(CACHE_NOME).then(cache => cache.put(req, copia));
        }
        return resp;
      }).catch(() => cacheado); // sem internet: usa o cache
      return cacheado || rede;
    })
  );
});
