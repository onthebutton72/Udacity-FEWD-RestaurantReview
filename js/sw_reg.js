/**
 * Register Service Worker
 * Obtained code from https://developers.google.com/web/fundamentals/primers/service-workers/
 */
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          // Registration was successful
          console.log('Service Worker Registered: ', registration.scope);
        }, (error) => {
           // Registration Failed
           console.log('Service Worker registration failed', error);
         });
    });
}