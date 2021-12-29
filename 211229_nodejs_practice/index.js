const http = require("http");

http
  .createServer(function (req, res) {
    let date = new Date();
    date.setDate(date.getDate() + 7);

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Set-Cookie": [
        "myname = seongsoo; Expires = " + date.toUTCString(),
        "mygoal = good developer",
      ],
    });

    res.end("<h1>" + req.headers.cookie + "</h1>");
  })
  .listen(3001, function () {
    console.log("Server is Running at http://127.0.0.1:3001");
  });
