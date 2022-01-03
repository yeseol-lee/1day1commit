const createChessBoard = (num) => {
  let oddLine = "";
  let evenLine = "";

  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      oddLine += "#";
      evenLine += " ";
    } else {
      oddLine += " ";
      evenLine += "#";
    }
  }

  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      console.log(evenLine);
    } else {
      console.log(oddLine);
    }
  }
};

createChessBoard(8);
