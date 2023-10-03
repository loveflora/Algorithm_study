function solution(numbers) {
  // 정답 참조
  const length = numbers.length;
  const answer = Array.from({ length }, () => -1);
  const stack = [];

  // 뒤에서 순회해서 효율성 측면에서 좋아짐...
  for (let i = length - 1; i >= 0; i--) {
    // stack.at(-1) : 맨 위(마지막)에 있는 값을 가져옴
    // number[-1] : 가장 끝에 있는 값
    while (stack.length !== 0 && numbers[i] >= stack.at(-1)) {
      // 값이 있고, stack의 맨 위에 있는 값보다 크거나 같으면
      stack.pop();
      // 사라짐
    }
    if (stack.length !== 0) {
      answer[i] = stack.at(-1);
    }
    stack.push(numbers[i]);
    console.log(stack);
  }
  return answer;
}

// 시간초과
// function solution(numbers) {
//     const answer = [];
//     const len = numbers.length;
//     for(let i = 0; i < len; i++){
//         let num = numbers.shift();
//         let pushed = false;
//         for(let j = 0; j < numbers.length; j++){
//             if(numbers[j] > num){
//                 answer.push(numbers[j])
//                 pushed = true;
//                 break;
//             }
//         }
//         if(!pushed){
//             answer.push(-1);
//         }
//     }
//     return answer;
// }
