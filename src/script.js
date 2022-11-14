if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceworker.js");
}

window.addEventListener('load', function () {
  window.history.pushState({}, '')
})