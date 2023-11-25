//=== 4-1. 자릿수의 합 ===
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
// 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 10,000,000를 넘지 않는다.

// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.

// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123

// 출력예제 : 1 137

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

//] 1. 나의 풀이
// function solution(n, arr) {
//   // let answer;
//   let newArr = [];

//   for (let num of arr) {
//     let eachNum = num
//       .toString()
//       .split("")
//       .map((e) => Number(e))
//       .reduce((sum, cur) => sum + cur);

//     newArr.push(eachNum);
//   }

//   let max = Math.max(...newArr);

//   // max 값이 두개라면
//   // for(let num of newArr) {
//   //   if (num === max) {

//   //   }
//   // }
//   // newArr.indexOf();

//   console.log(newArr);
//   console.log(max);

//   // return answer;
// }

//] 2. 풀이 (1)
//-- 나머지를 활용
//) 나머지 : 일의 숫자
//) 몫 : 일의 앞 숫자
// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER; // 작은 수로 초기화
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x; // 임시변수 선언 --> 원본값 필요하기 때문 !
//     while (tmp) {
//       sum += tmp % 10; // 자릿수의 합
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       // sum >= max 라고 하면, 같은 합 중에서 뒤에 있는 숫자가 나오게 됨 (큰 숫자가 아니라)
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x; // 기존보다 큰 숫자이면, 정답으로 바꿔줌
//     }
//   }
//   return answer;
// }

//] 3. 풀이 (2)
//-- 배열 메소드 활용
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
