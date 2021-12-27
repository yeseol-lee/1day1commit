console.log("start program");

const EventEmitter = require("events");
let custom = new EventEmitter();

custom.on("tick", function (code) {
  console.log("tick 이벤트가 실행되었습니다.");
});

setTimeout(() => {
  custom.emit("tick");
}, 5000);
