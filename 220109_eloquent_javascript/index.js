const range = (first, end, step) => {
  if (!step) step = 1;

  const result = [];

  if (step > 0) {
    for (let i = first; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = first; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
};

const sum = (arr) => {
  let sum = 0;
  for (let elem in arr) {
    sum += parseInt(arr[elem]);
  }

  return sum;
};

console.log(sum(range(1, 10)));
