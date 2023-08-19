function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((e) => e !== "");

  //-- 1) x로 공백제거 : split
  //   - '...x'로 끝나는 경우, 마지막에 "" 남게 됨 ~~~> 3) 에서 처리 예정

  //-- 2) 사전순 정렬 : sort

  //-- 3) 마지막 "" 제거 : filter
  //      ""가 아닌 것만 남게됨 (= 즉, "" 제거됨)
}
