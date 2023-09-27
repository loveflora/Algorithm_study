function solution(id_pw, db) {
  var answer = "";

  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0]) {
      if (id_pw[1] === db[i][1]) {
        return (answer = "login");
      } else {
        return (answer = "wrong pw");
      }
    } else continue;
  }

  return (answer = "fail");
}
