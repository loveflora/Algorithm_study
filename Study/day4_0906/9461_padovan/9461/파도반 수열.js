const [count, ...arr] = require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (loc of arr) {
    const dp = Array(Number(loc) + 1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    for (let j = 4; j < dp.length; j++) {
        dp[j] = dp[j - 2] + dp[j - 3];
    }
    console.log(dp[Number(loc)]);
}
