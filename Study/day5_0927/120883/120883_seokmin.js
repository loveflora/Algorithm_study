function solution(id_pw, db) {
  if (!db.find(([id]) => id_pw[0] === id)) return 'fail';
  return db.find(([id, pw]) => id_pw[0] === id && id_pw[1] === pw) ? 'login' : 'wrong pw';
}
