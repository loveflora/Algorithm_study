function solution(n) {
  let answer = 1;
  let i = 0;

  while (answer <= n) {
    i++;
    answer *= i;
  }

  return i - 1;

  // ----- 2번째 풀이 -----
  // const getFactorial = i => {
  //     let fact = 1;
  //     for(let j = 1; j <= i; j++) {
  //         fact *= j;
  //     }
  //     return fact;
  // }

  //     for(let k = 1; ; k++) {
  //         const result = getFactorial(k);
  //         if(n < result) {
  //             return k - 1;
  //         }
  //     }
}
