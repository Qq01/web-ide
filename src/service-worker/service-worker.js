const virtualFiles = 'virtual-files';

addEventListener('message', event => {
    if (event.data.type == 'ADD') {
        caches.open(virtualFiles).then(cache => {
            cache.put(event.data.url, event.data.response);
        });
    }
    else if (event.data.type == 'CLEAR') {
        caches.open(virtualFiles).then(cache => {
            cache.keys(key => {
                cache.delete(key);
            });
        })
    }
});

addEventListener('fetch', event => {
    event.respondWith(caches.open(virtualFiles).then(cache => {
        return cache.match(event.request).then(match => {
            return match || Promise.reject('no-match');
        });
    }))
});