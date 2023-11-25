//] 2차원 배열 만들기 (fill, map 활용)
let a = Array(3)
  .fill()
  .map((e) => Array(5).fill(1));

console.log("2차원 배열 >>", a);

//] swap
const swap = [1, 2, 3, 4, 5];
[swap[1], swap[3]] = [swap[3], swap[1]];
console.log("swap >>", swap); // [ 1, 4, 3, 2, 5 ]
