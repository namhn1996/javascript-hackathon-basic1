let aray = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let max = aray[0];
for (let i = 0; i < aray.length; i++) {
  if (max < aray[i]) {
    max = aray[i];
  }
}
console.log(max);
