//=== 7-9. 결혼식 ===

// https://school.programmers.co.kr/learn/courses/30/lessons/155651
//-- 프로그래머스 호텔 대실과 유사한 문제

// 현수는 다음 달에 결혼을 합니다.
// 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
// 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
// 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.

// 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
// 만약 한 친구가 오는 시간 13, "가는시간 15"라면
// 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 "15시 정각에는 존재하지 않는다"고 가정합니다.

// ▣ 입력설명
// 첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
// 두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
// 시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현됩니다.

// ▣ 출력설명
// 첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.

// ▣ 입력예제 1
// 5
// 14 18
// 12 15
// 15 20
// 20 30
// 5 14

// ▣ 출력예제 1
// 2

function solution(times) {
  // let answer = Number.MIN_SAFE_INTEGER;
  let answer = 0;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], 's']); // [x[0], "s"] : 시간, "도착"
    T_line.push([x[1], 'e']); // [x[1], "e"] : 시간, "떠남"
  }

  T_line.sort((a, b) => {
    // 시간이 같으면, 떠나고(e) 도착(s)
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    // if (a[1] === "e" && b[1] === "s") return -1; // "e"가 "s"보다 우선
    // if (a[1] === "s" && b[1] === "e") return 1;  // "s"가 "e"보다 우선
    // 시간 기준으로 오름차순 정렬
    else return a[0] - b[0];
  });

  console.log(T_line);
  // [ [ 14, 's' ], [ 18, 'e' ], ... ]

  let cnt = 0;
  for (let x of T_line) {
    // s(도착)하면, +1
    if (x[1] === 's') cnt++;
    // e(떠남)하면, -1
    else cnt--;

    // let answer = 0;
    answer = Math.max(answer, cnt);
    // 최댓값이 정답
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));