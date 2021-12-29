const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(302, { Location: "https://www.naver.com" });
    res.end();
  })
  .listen(3001, function () {
    console.log("Server is Running at http://127.0.0.1:3001");
  });
