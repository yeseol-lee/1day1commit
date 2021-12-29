const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    let path = url.parse(req.url).pathname;

    if (path == "/") {
      fs.readFile("./index2.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (path == "/otherPage") {
      fs.readFile("./otherPage.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  })
  .listen(3003, function () {
    console.log("Server is Running at http://127.0.0.1:3003");
  });
