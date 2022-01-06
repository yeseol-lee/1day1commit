const countBs = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "B") count++;
  }
  return count;
};

console.log(countBs("hello"));
console.log(countBs("hBello"));
console.log(countBs("heBlBlo"));
console.log(countBs("hebbBBsBllo"));
console.log(countBs("hellvbbBo"));

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === char) count++;
  }
  return count;
};

console.log(countChar("helllo", "l"));
console.log(countChar("helllo", "h"));
console.log(countChar("helllo", "e"));
console.log(countChar("hellloo", "o"));
