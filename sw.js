self.oninstall = function() {
  self.skipWaiting();
};

self.onactivate = function() {
  clients.claim();
};

self.onmessage = function(event) {
  if (event.data == 'claim') {
    clients.claim();
  }
};


self.onfetch = function(event) {
  var url = new URL(event.request.url);
  if (url.host === 'nooooope') {
    event.respondWith(
      new Response('{"This came from": "The ServiceWorker fetching other hosts"}', {
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
  }
    if (url.pathname === '/404.json') {
    event.respondWith(
      new Response('{"This came from": "The ServiceWorker fetching our host"}', {
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
  }
};