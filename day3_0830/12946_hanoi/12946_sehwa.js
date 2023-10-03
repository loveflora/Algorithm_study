function solution(n) {
  const result = [];

  function hanoi(num, from, to, other) {
    // num : 원반 갯수
    // from : 출발지 기둥 번호
    // to : 목적지 기둥 번호
    // other : 나머지 기둥 번호

    if (num === 1) {
      result.push([from, to]);
    } else {
      // 1)
      hanoi(num - 1, from, other, to);
      result.push([from, to]);

      // 2)
      hanoi(num - 1, other, to, from);
    }

    // - 아이디어 : 거꾸로 올라가서 생각하기 (결과 -> 초기세팅), 덩어리 별로 breakpoint 나눠서 생각
    // - 핵심 : 가장 큰 원반이 목적지(to)의 맨 아래에 놓여야 함
    //      => 1) '가장 큰 원반 뺀 나머지(n-1)'는 '나머지 기둥(other)'에 놓여야 함
    //            hanoi(num - 1, from, other, to);

    //      => 2) '나머지 기둥(other)에 있는 원반'을 가장 큰 원반이 있는 목적지(to)로 이동
    //            hanoi(num - 1, other, to, from);
  }

  hanoi(n, 1, 3, 2);
  // n : 원반 갯수
  // 1 : 출발지 기둥 번호
  // 3 : 목적지 기둥 번호
  // 2 : 나머지 기둥 번호

  return result;
}

// 재귀함수 && 하노이의 탑 설명 영상
// https://www.youtube.com/watch?v=aPYE0anPZqI
