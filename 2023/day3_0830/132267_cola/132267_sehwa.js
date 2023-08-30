// 재귀함수
function solution(a, b, n) {
  if (n < a) {
    // 빈 병(n)이 남은 병(a)보다 작은 경우
    return 0;
  } else {
    let newCoke = Math.floor(n / a) * b;
    // '빈병(n) = (새콜라 + 계산에서 제외되어진 나머지 병)' 으로 재귀 반복
    return newCoke + solution(a, b, newCoke + (n % a));
  }
}
