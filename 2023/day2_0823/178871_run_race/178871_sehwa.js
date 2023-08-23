//# 시간 초과 !
// 다시 풀어보기

function solution(players, callings) {
  //? 왜 안되는거지...
  // let a = 1, b = 2
  // [a, b] = [b, a]
  // console.log(b, a)

  // let a = 1, b = 2
  // let z = 0
  // z = b
  // b = a
  // a = z
  // console.log(a, b)

  // callings[0] === players[i] 일치하면
  // 앞에 원소와 순서 변경 (swap)

  // let a = players[1], b = players[2]
  // [a, b] = [b, a]

  // [players[0], players[1]] = [players[1], players[0]]

  for (let i = 0; i < callings.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (callings[i] === players[j]) {
        [players[j - 1], players[j]] = [players[j], players[j - 1]];
      } else continue;
    }
  }

  return players;
}
