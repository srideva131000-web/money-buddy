self.addEventListener('install', (event) => {
  console.log('Money Buddy service worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Money Buddy service worker activated');
});
