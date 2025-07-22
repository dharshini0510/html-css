const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });

    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      res.write(`data: Current time is ${now}\n\n`);
    }, 3000);

    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  }
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
