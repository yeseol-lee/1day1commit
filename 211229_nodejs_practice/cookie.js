const http = require("http");
const cookie = require("cookie");
const { rmSync } = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200);
    let cookies = {};
    if (req.headers.cookie !== undefined) {
      cookies = cookie.parse(req.headers.cookie);
      console.log(cookies);
    } else {
      console.log("no cookie");
    }

    res.end("<h1>Hello! " + cookies.myname + "</h1>");
  })
  .listen(3002, function () {
    console.log("Server is Running at http://127.0.0.1:3002");
  });
