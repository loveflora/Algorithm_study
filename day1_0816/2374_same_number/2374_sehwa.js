// n(1 ≤ n ≤ 1,000)개의 자연수 A[1], A[2], A[3], …, A[n]이 있다.
// 이 자연수에 Add(i)라는 연산을 하면, A[i]가 1만큼 증가한다.
// 이때, A[i]만 증가하는 것이 아니고, A[i]의 좌우로 인접한 같은 수의 그룹이 한번에 1씩 증가한다.
// A[1]과 A[n]은 인접해 있지 않다.

// 예를 들어 수가 {1, 1, 1, 1, 3, 3, 1} 이었다고 해 보자.
// Add(2)를 하면 A[2]의 좌우로 인접한 같은 수가 1씩 증가하니까 {2, 2, 2, 2, 3, 3, 1}이 된다.
// 여기서 Add(4)를 하면 {3, 3, 3, 3, 3, 3, 1}이 되고, 여기서 Add(1)을 하면 {4, 4, 4, 4, 4, 4, 1}이 된다.
//# 문제가 이해가 안감..ㅠ

// 이와 같이 Add라는 연산을 사용하여 A[1] = A[2] = A[3] = … = A[n]이 되도록 하려 한다.
// 이때, 최소 회수로 Add연산을 사용하는 방법을 찾는 것이 문제이다

// 3
// 1
// 5
// 10
//; 9

// 3 2 5 10
// 3 3 5 10
// 4 4 5 10
// 5 5 5 10
// 6 6 6 10
// 7 7 7 10
// 8 8 8 10
// 9 9 9 10
// 10 10 10 10

const array = require("fs")
  .readFileSync("./2374.txt")
  .toString()
  .trim()
  .split("\n");

function solution(s) {
  // 숫자 배열
  let arr = [];

  for (let e of s) {
    arr.push(+e);
  }

  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(...arr);

    // 최소값 + 1
    if (arr[i] === min) {
      arr[i] += 1;
    }
  }
}

solution(array);
