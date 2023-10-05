//=== 6-6. 공주 구하기 ===

// 정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.
// 정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다.
// 정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.

// 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다.
// 그리고 1번 왕자부터 N 번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.
// 그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
// 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
// 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
// 이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

// 예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자.
// 처음에는 3번 왕자가 3 을 외쳐 제외된다.
// 이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고, 마지막까지 남게 된 7 번 왕자에게 공주를 구하러갑니다.
// N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

// ▣ 입력설명
// 첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.

// ▣ 출력설명
// 첫 줄에 마지막 남은 왕자의 번호를 출력합니다.

// ▣ 입력예제 1
// 83

// ▣ 출력예제 1
// 7

function solution(n, k) {
  let answer;
  // Queue : FIFO

  let queue = Array.from({ length: n }, (value, index) => index + 1);
  // Array.from({ length: n }) : 길이가 n인 유사배열
  // (n) [1, 2, 3, 4, 5, ... n]

  // Array.from() : iterable이나 유사 배열 객체를 => 진짜 배열로 변환해줄 때 사용 !

  while (queue.length) {
    // 0되면 멈춤
    for (let i = 1; i < k; i++) queue.push(queue.shift()); // 제일 앞에 애를 빼서, 맨 뒤로 넣음
    // k번째는 빼기
    queue.shift(); // shift : 제일 앞에서 remove

    if (queue.length === 1) answer = queue.shift();
    // 마지막 하나 남았을 경우 --> 마지막 자료를 답으로 빼고 --> queue.length === 0 이 되므로 종료됨
  }
  return answer;
}

console.log(solution(8, 3));
