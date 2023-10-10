//=== 7-12. 마구간 정하기(결정알고리즘) ===
//-- 이분 검색

// N개의 마구간이 수직선상에 있습니다.
// 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마 구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
// 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

// ▣ 출력설명
// 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

// ▣ 입력예제 1
// 5 3  // 마구간 개수 , 말의 수
// 1 2 8 4 9  // 마구간 좌표

// ▣ 출력예제 1
// 3  // 가장 가까운 두 말의 최대 거리

function count(stable, dist) {
  // dist: 가장 가까운 두 말의 거리
  // cnt : 배치한 말의 수
  let cnt = 1, // 한마리는 무조건 배치
    ep = stable[0]; // 첫 번째 말은 무조건 1번 자리
  // ep : 직전에 말을 배치한 곳

  for (let i = 1; i < stable.length; i++) {
    // stable[i]에 말 배치 가능한지 확인
    // 가장 가까운 두 말의 거리(dist, 최소거리)보다 커야함
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  // c: 말의 수
  // stable: 마구간 위치 배열
  let answer;
  // 마구간 위치 정렬
  stable.sort((a, b) => a - b);

  let lt = 1; //~ 왜 1...? stable[0]...?
  let rt = stable[stable.length - 1]; // 맨 끝

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 우선 중간지점을 찍음 (가장 가까운 두 말의 거리)
    // 모든 말 사이의 거리는 "가장 가까운 두 말의 거리" 이상
    // c 마리 이상 되어야
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1; // 말 전부 배치하면, 더 좋은 답을 위해 찾음
      //~ 정확히 이해가 ㅠㅠ
    } else rt = mid - 1; // 틀리면, 그보다 큰 범위는 없앰 (말을 전부 배치 못하니까, 거리를 좁힘)
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
