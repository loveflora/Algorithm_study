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

const array = require('fs')
  .readFileSync('./9461.txt')
  .toString()
  .trim()
  .split('\n');

const input = require('fs').readFileSync('./9461.txt').toString().trim();
// .split('\n');

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
// 처음에만 1 1 1 2 이고 이후부터는
// 2+1 = 3
// 3+1 = 4
// 4+1 = 5
// 5+2 = 7
// 7+2 = 9
// 9+3 = 12

// 4개 차이남

let lines = [1, 1, 1, 2, 2];

lines.push(input);

for (let i = 0; i <= input - 5; i++) {
  lines.push(lines[i] + lines[i + 4]);
}

console.log(lines);
console.log(input);
