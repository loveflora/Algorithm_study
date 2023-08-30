function solution(n) {
  // indenting

  // 메모이제이션
  // 정적 vs 동적
  const arr = new Array(n);
  arr[0] = 0;
  arr[1] = 1;

  //for문
  for (let i = 2; i <= n; i++) {
    // 점화식
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
}
