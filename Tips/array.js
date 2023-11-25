//=== 배열 ===
//] 배열 생성
//; 2차원 배열 만들기
// fill, map 활용
let a = Array(3)
  .fill()
  .map((e) => Array(5).fill(1));

console.log("2차원 배열 >>", a);

//; 유사 배열 활용
let queue = Array.from({ length: 10 }, (value, index) => index + 1);
// Array.from({ length: n }) : 길이가 n인 유사배열
// (n) [1, 2, 3, 4, 5, ... n]
console.log("queue >> ", queue);

//] 원소 합
let arr = [1, 2, 3, 4];
let ret = arr.reduce((a, b) => a + b, 0);
console.log("배열의 합 >>", ret); // 10

//] 특정 값 삭제
let strArr = ["a", "b", "b", "c"];

// 원소 'b' 삭제
//-- 1. filter
let filtered = strArr.filter((element) => element !== "b");
console.log("filter로 원소 'b' 삭제 >>", filtered); // [ 'a', 'c' ]

//-- 2. splice
for (let i = 0; i < strArr.length; i++) {
  if (strArr[i] === "b") {
    strArr.splice(i, 1);
    i--;
  }
}
console.log("splice로 원소 'b' 삭제 >>", strArr); // ['a', 'c']

//] swap
const swap = [1, 2, 3, 4, 5];
[swap[1], swap[3]] = [swap[3], swap[1]];
console.log("swap >>", swap); // [ 1, 4, 3, 2, 5 ]

//] 중복 제거
let chars = ["A", "B", "A", "C", "B"];
let uniqueChars = [...new Set(chars)];

console.log("중복 제거 >>", uniqueChars); // [ 'A', 'B', 'C' ]

//; Set
myArray = [1, 1, 2, 2, 3];
mySet = new Set(myArray);
console.log("size >>", mySet.size); // 3

console.log("add >>", mySet.add(4)); // Set(4) { 1, 2, 3, 4 }
console.log("has >>", mySet.has(1)); // true
console.log("delete >>", mySet.delete(4)); // true
console.log("mySet >>", mySet); // Set(3) { 1, 2, 3 }

//] 배열 내 객체 속 value 값을 꺼내서, 새 배열에 집어넣기
let obj = { key1: "value1", key2: "value2", key3: "value3", key4: "value4" };
let result = Object.keys(obj).map((key) => obj[key]);

console.log("객체 값들을 배열에 담기 >>", result); // [ "value1", "value2", "value3", "value4" ]
