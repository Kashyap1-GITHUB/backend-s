const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world chach from the server");
});

server.listen(3000, () => {
  console.log("server is starting now");
});
