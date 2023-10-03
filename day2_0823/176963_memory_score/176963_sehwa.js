function solution(name, yearning, photo) {
  let answer = [];
  let score = 0;

  // name[i] 이면, yearning[i]
  for (let j = 0; j < photo.length; j++) {
    for (let k = 0; k < photo[j].length; k++) {
      for (let i = 0; i < name.length; i++) {
        if (photo[j][k] === name[i]) {
          score += yearning[i];
        } else continue;
      }
    }
    answer.push(score);
    score = 0;
  }
  return answer;
}
