const reverseArray = (arr) => {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < arr.length / 2; i += 1) {
    const anotherIndex = arr.length - i - 1;
    const tempValue = arr[i];

    arr[i] = arr[anotherIndex];
    arr[anotherIndex] = tempValue;
  }
  return arr;
};
console.log(reverseArray([10, 9, 8, 7, 6]));
console.log(reverseArrayInPlace([10, 9, 8, 11, 7, 6]));
