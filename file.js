const fs = require("fs");

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(data);
});

let data = "I love node js";

fs.writeFile("./otherfile.txt", data, "utf8", function (error) {
  console.log("data insert COMPLETE!!!");
});
