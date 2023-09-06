// 오른쪽 그림과 같이 삼각형이 나선 모양으로 놓여져 있다.
// 첫 삼각형은 정삼각형으로 변의 길이는 1이다.
// 그 다음에는 다음과 같은 과정으로 정삼각형을 계속 추가한다.
// 나선에서 가장 긴 변의 길이를 k라 했을 때, 그 변에 길이가 k인 정삼각형을 추가한다.

// 파도반 수열 P(N)은 나선에 있는 정삼각형의 변의 길이이다.
// P(1)부터 P(10)까지 첫 10개 숫자는 1, 1, 1, 2, 2, 3, 4, 5, 7, 9이다.

// N이 주어졌을 때, P(N)을 구하는 프로그램을 작성하시오.

// 2
// 6
// 12

// 3
// 16

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
// 처음에만 1 1 1 2 이고 이후부터는
// 1+1 = 2
// 2+1 = 3
// 3+1 = 4
// 4+1 = 5
// 5+2 = 7
// 7+2 = 9
// 9+3 = 12

let [count, ...arr] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (loc of arr) {
  const dp = Array(Number(loc) + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  for (let j = 4; j < dp.length; j++) {
    dp[j] = dp[j - 2] + dp[j - 3];
  }
  console.log(dp[Number(loc)]);
}

// arr = arr.map((item) => item.split(' ').map(Number));

// console.log(count);
// console.log(arr.join('\n'));
// console.log(arr);
