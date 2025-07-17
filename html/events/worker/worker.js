
self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  self.skipWaiting();
});


self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  clients.claim(); 
});


self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
 
});


self.addEventListener("message", (event) => {
  console.log("Message from page:", event.data);
});


self.addEventListener("messageerror", (event) => {
  console.log("Message Error: Could not parse");
});


self.addEventListener("notificationclick", (event) => {
  console.log("Notification Clicked");
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

self.addEventListener("notificationclose", (event) => {
  console.log("Notification Closed");
});

self.addEventListener("sync", (event) => {
  if (event.tag === "sync-data") {
    console.log("Sync Event Triggered");
    event.waitUntil(doSyncTask());
  }
});

self.addEventListener("push", (event) => {
  const data = event.data ? event.data.text() : "No message";
  console.log("Push Received:", data);
  event.waitUntil(
    self.registration.showNotification("Push Notification", {
      body: data,
      icon: "/icon.png",
    })
  );
});
