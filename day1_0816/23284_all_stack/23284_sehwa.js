// 스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다.
// 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아
// 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

// 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
// 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자.
// n이 주어졌을 때, 만들 수 있는 모든 스택 수열을 구해보자.

const array = require("fs")
  .readFileSync("./23264.txt")
  .toString()
  .trim()
  .split("\n");

function solution(s) {
  // 1 2 3
  // 1 3 2
  // 2 1 3
  // 2 3 1
  // 3 1 2 ---> X ...
  // 3 2 1
}

solution(array);
