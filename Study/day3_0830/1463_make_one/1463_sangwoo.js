const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = Number(input);
// const num = 10;
// index 위치에는 해당 위치값이 1이 되기 위해 거치는 계산횟수가 저장됨
const dp = Array(num + 1).fill(0);

// 1) X가 3으로 나누어 떨어지면, 3으로 나눈다.
// 2) X가 2로 나누어 떨어지면, 2로 나눈다.
// 3) 1을 뺀다.
// => 최소값

for (let i = 2; i <= num; i++) {
  // 3) 1을 빼는 경우
  dp[i] = dp[i - 1] + 1;

  // 2) X가 2로 나누어 떨어지면, 2로 나눈다.
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 1) X가 3으로 나누어 떨어지면, 3으로 나눈다.
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[num]);
