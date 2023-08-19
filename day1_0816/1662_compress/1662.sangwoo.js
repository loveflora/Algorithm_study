const cal = (array) => {
<<<<<<< HEAD:2023/day1_0816/1662_compress/1662.sangwoo.js
    let len = 0;
    let stack = [];
    while (array.length > 0) {
        if (array[1] === '(') {
            const dup = array.shift();
            const temp = [];
            let count = 0;
            while (true) {
                if (array[0] === '(') {
                    temp.push(array.shift());
                    count++;
                } else if (array[0] === ')') {
                    --count;
                    temp.push(array.shift());
                    if (count === 0) {
                        break;
                    }
                } else {
                    temp.push(array.shift());
                }
            }
            temp.shift();
            temp.pop();
            stack.push(cal(temp) * dup);
        } else {
            array.shift();
            len++;
        }
    }
    let result = 0;
    for (r of stack) {
        result += r;
    }
    return len + result;
=======
  let len = 0;
  let stack = [];
  while (array.length > 0) {
    if (array[1] === '(') {
      const dup = array.shift();
      const temp = [];
      let count = 0;
      while (true) {
        if (array[0] === '(') {
          temp.push(array.shift());
          count++;
        } else if (array[0] === ')') {
          --count;
          temp.push(array.shift());
          if (count === 0) {
            break;
          }
        } else {
          temp.push(array.shift());
        }
      }
      temp.shift();
      temp.pop();
      stack.push(cal(temp) * dup);
    } else {
      array.shift();

      len++;
    }
  }
  let result = 0;
  for (r of stack) {
    result += r;
  }
  return len + result;
>>>>>>> b14fbcccaf108b1ead972e8c1f20562fb18e0a9e:2308/day1_16/1662_compress/1662.sangwoo.js
};

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('');
console.log(cal(arr));
<<<<<<< HEAD:2023/day1_0816/1662_compress/1662.sangwoo.js
=======

// 재귀함수
>>>>>>> b14fbcccaf108b1ead972e8c1f20562fb18e0a9e:2308/day1_16/1662_compress/1662.sangwoo.js
