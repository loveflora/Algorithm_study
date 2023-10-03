const dp = Array(100000).fill(0);

function solution(n) {
  return fib(n);
}

// 탑 다운 방식
// F(n) = F(n-1) + F(n-2)
function fib(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  if (dp[num] !== 0) {
    return dp[num];
  }
  dp[num] = (fib(num - 1) + fib(num - 2)) % 1234567;
  return dp[num];
}
