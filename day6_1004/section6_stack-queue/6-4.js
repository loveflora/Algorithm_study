//=== 6-4. 후위식 연산 ===
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// ▣ 출력설명
// 연산한 결과를 출력합니다.

// ▣ 입력예제 1
// 352+*9-

// ▣ 출력예제 1
// 12

function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    // 숫자라면 -> 문자를 숫자로 형변환 후 -> stack에 넣기
    else {
      let rt = stack.pop(); // 연산자의 Rt (처음 꺼낸 숫자)
      let lt = stack.pop(); // 연산자의 Lt (나중 꺼낸 숫자)
      // stack에 있던 것을 빼는 것이므로 숫자임

      //) 큰 숫자(Lt, 나중에)  "연산자"  작은 숫자(Rt, 처음)
      // - , / 는 연산 순서가 중요함

      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
