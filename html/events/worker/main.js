

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then((reg) => console.log("SW Registered", reg))
    .catch((err) => console.error("W Error", err));

  
  navigator.serviceWorker.ready.then((reg) => {
    reg.active.postMessage("Hello from page!");
  });
}
