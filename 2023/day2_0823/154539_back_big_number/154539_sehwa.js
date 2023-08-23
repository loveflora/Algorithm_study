//# 시간 초과 !
// 다시 풀어보기

function solution(numbers) {
  let answer = [];
  let compare = [];
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      answer.push(numbers[i + 1]);
    } else {
      for (let j = i + 1; j < numbers.length; j++) {
        compare.push(numbers[j]);
      }

      max = Math.max(...compare);

      if (numbers[i] < max) {
        answer.push(max);
      } else {
        answer.push(-1);
      }

      // 초기화 잊지 말자 !
      compare = [];
    }
  }
  return answer;
}
