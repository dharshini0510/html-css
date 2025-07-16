onmessage = function(event) {
  console.log("Worker received the work");

  const result = `${event.data * event.data}`;

  postMessage(result);
};