function solution(s, skip, index) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let sArr = s.split("");

  // skip 제거
  for (let letter of skip) {
    alphabets = alphabets.filter((e) => e !== letter);
  }

  let answer = sArr
    .map((e) => alphabets[(alphabets.indexOf(e) + index) % alphabets.length])
    .join("");

  return answer;
}
