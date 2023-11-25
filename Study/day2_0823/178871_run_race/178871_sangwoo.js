// 객체사용
// 추월하는 사람과 추월당하는 사람의 자리를 찾는과정에서 선형탐색법 사용시 시간초과
// -> 사람마다 현재 위치를 저장하는 객체를 만들어서 자리를 바로 찾을 수 있도록 수정
function solution(players, callings) {
    const keyPlayers = {}; // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
    players.forEach((player, idx) => {
        keyPlayers[player] = idx;
    });
    callings.forEach((calling) => {
        const loseKey = keyPlayers[calling] - 1; // 추월당하는 사람의 자리
        const winKey = keyPlayers[calling]; // 추월하는 사람의 자리
        // 객체에서 추월당한 후 추월하는 사람과 추월당하는 사람끼리자리 바꾸기
        keyPlayers[players[loseKey]] = winKey;
        keyPlayers[players[winKey]] = loseKey;
        // players 배열에 추월하는 사람과 추월당하는 사람끼리자리 바꾸기
        const winner = players[winKey];
        const loser = players[loseKey];
        players[loseKey] = winner;
        players[winKey] = loser;
    });
    return players;
}

// 시간 초과
// function solution(players, callings) {
//     var answer = [];
//     const keyPlayers = {};
//     const keyRanks = {};
//     const arr = [];
//     for (let i = 0; i < players.length; i++) {
//         arr.push(i.toString());
//     }
//     players.forEach((player, idx) => {
//         const rank = idx;
//         keyPlayers[player] = rank;
//         keyRanks[rank] = player;
//     });
//     console.log(keyRanks);
//     console.log(arr);
//     callings.forEach((calling) => {
//         const num = Object.keys(arr).find((key) => keyRanks[key] === calling);
//         const beforeNum = Number(num) - 1;
//         const temp = keyRanks[num];
//         const temp2 = keyRanks[beforeNum];
//         keyRanks[beforeNum] = temp;
//         keyRanks[num] = temp2;
//     });
//     for (let i = 0; i < players.length; i++) {
//         answer.push(keyRanks[i]);
//     }
//     return answer;
// }
