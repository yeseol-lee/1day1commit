const arrayToList = (arr) => {
  if (arr.length > 0) {
    const value = arr[0];
    arr.shift();
    return { value: value, list: arrayToList(arr) };
  } else {
    return null;
  }
};

const listToArray = (list) => {
  let result = [];
  result.push(list.value);
  if (list.list) {
    return [...result, ...listToArray(list.list)];
  } else {
    return result;
  }
};

const prepend = (elem, list) => {
  return { value: elem, list };
};

const nthHelper = (list, num) => {
  let nthList = list;
  while (num > 0) {
    nthList = nthList.list;
    if (!nthList) return undefined;
    num -= 1;
  }
  return nthList.value;
};

const nthHelperRecursive = (list, num) => {
  if (num == 0) {
    return list.value;
  } else if (!list) {
    return undefined;
  } else {
    return nthHelperC(list.list, (num -= 1));
  }
};

console.log(arrayToList([1, 3, 5, 7, 9]));
console.log(nthHelperC(arrayToList([1, 3, 5, 7, 9]), 6));
