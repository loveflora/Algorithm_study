function solution(name, yearning, photo) {
  var answer = [];

  // 2차원 photo 배열 2중 for문으로 순회
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      // 배열값 photo[i][j]이 name에 포함되어있다면 yearning 값 합산
      // indexOf로 찾은 인덱스값으로 yearning 배열에서 값 찾기
      if (name.includes(photo[i][j])) {
        sum += yearning[name.indexOf(photo[i][j])];
      }
    }
    answer.push(sum);
  }

  return answer;
}
