//=== 뒤집은 소수 ===
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후, 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
// 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 100,000를 넘지 않는다.

// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100

// ▣ 출력예제 1 23 2 73 2 3

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

//] 풀이 (1)
//-- while

// 1. 소수 판별
function isPrime(num) {
  if (num === 1) return false; // 1은 소수가 아님

  // 약수는 절반부터 존재
  // 16 = 1 * 16
  //      2 * 8 (절반)
  //      4 * 4 (제곱근까지만)
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    // 제곱근 까지만 반복문 돈다
    if (num % i === 0) return false; // 약수이면 소수 아님
  }
  return true;
}

// 2.
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0; // result (뒤집은 숫자)
    // 임시 변수(tmp) 설정은 안했음 (원본값 필요없기 때문)

    while (x) {
      let t = x % 10;
      res = res * 10 + t;

      x = parseInt(x / 10);
      // 나머지를 활용
      //) 나머지 : 일의 숫자
      //) 몫 : 일의 앞 숫자
    }

    //  x       res = res * 10 + t     x=x/10
    //-----------------------------------------
    // 307 --->   0 * 10 + 7 = 7         30
    // 30  --->   7 * 10 + 0 = 70        3
    // 3   --->   70 * 10 + 3 = 703      0 (종료)

    if (isPrime(res)) answer.push(res); // 뒤집은 숫자(res)가 소수이면
  }
  return answer;
}

//] 풀이 (2)
//-- reverse 배열 메소드 사용
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let res = Number(x.toString().split("").reverse().join(""));
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }
