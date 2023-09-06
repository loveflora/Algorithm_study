const num = require("fs").readFileSync("./dev/stdin").toString().trim();

const permutator = (input) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m.join(""));
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = [...arr]; // 얕은복사
                let next = curr.splice(i, 1); // 다음 요소
                // console.log([...curr], m.concat(next));
                permute(curr, m.concat(next));
            }
        }
    };

    permute(input.split("")); // ['1', '2', '3']

    return result;
};

// console.log(permutator("123"));
const temp = permutator(num).sort();
const answers = [...new Set(temp)];

for (let i = 0; i < answers.length; i++) {
    if (i === answers.length - 1) {
        console.log("0");
    } else if (answers[i] === num) {
        console.log(answers[i + 1]);
        break;
    }
}
