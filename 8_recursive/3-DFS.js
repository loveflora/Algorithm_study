//=== 8-3. 이진트리 순회 (깊이우선탐색) ===

// 이진트리를 전위순회와 후위순회를 연습해보세요.

//    1
//  2   3
// 4 5 6 7

//-- 1) 기본 : 1 2 3 4 5 6 7
//)  - Lt : v * 2
//)  - Rt : v * 2 + 1

//-- 2) 전위순회 출력 : 1 2 4 5 3 6 7
//    '부모' - Lt - Rt

//-- 3) 중위순회 출력 : 4 2 5 1 6 3 7
//    Lt - '부모' - Rt

//-- 4) 후위순회 출력 : 4 5 2 6 7 3 1
//    Lt - Rt - '부모'

function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      // console.log(v);  // 부모
      answer += v + " ";
      DFS(v * 2); // Lt
      DFS(v * 2 + 1); // Rt
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(1));
