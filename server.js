const http = require("http");

const server = http.createServer((request, response) => {
  response.end("hello world");
});
server.listen(3000, () => {
  console.log("Server listening at port 3000");
});
