// http 모듈 1편 (http, server, request, response)

// http 모듈: 웹 서버, 클라이언트 생성 등 관련된 모든 기능을 담당함
// server 객체: http 모듈에서 가장 중요한 객체.
// http 모듈의 createServer() 메서드를 사용하여 server 객체 생성가능

const fs = require("fs");
const http = require("http");

const server1 = http.createServer();
const server2 = http.createServer();

server2.on("request", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World...</h1>");
});

server2.on("connection", function (code) {
  console.log("Connection Event");
});

// 응답, 요청에 대한 처리 없이 서버 생성만 함.
server1.listen(3001, function () {
  console.log("3001번 포트로 서버가 실행되었습니다.");
});

server2.listen(3002, function () {
  console.log("3002번 포트로 서버가 실행되었습니다.");
});

http
  .createServer(function (req, res) {
    fs.readFile("./practice.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(3003, function () {
    console.log("server running at http://127.0.0.1:3003");
  });
