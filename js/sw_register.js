document.addEventListener("DOMContentLoaded", e => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => console.log(`ServiceWorker registration successful. Scope: ${reg.scope}`))
      .catch(err => console.log(`ServiceWorker registration failed. ${err}`));
  }
  else {
    console.log('ServiceWorker not detected in this browser.');
  }
});