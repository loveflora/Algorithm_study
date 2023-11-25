//=== 7-10. 이분 검색 ===

// 임의의 N개의 숫자가 입력으로 주어집니다.
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면
// "이분검색"으로 M이 "정렬된 상태에서 몇 번째에 있는지" 구하는 프로그램을 작성하세요. 단 중복값은 존재하지 않습니다.

// ▣ 입력설명
// 첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
// 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

// ▣ 출력설명
// 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

// ▣ 입력예제 1
// 8 32
// 23 87 65 12 57 32 99 81

// ▣ 출력예제 1
// 3

function solution(target, arr) {
  // "이분검색"으로 M이 "정렬된 상태에서 몇 번째에 있는지"
  let answer;

  // 오름차순 정렬
  arr.sort((a, b) => a - b);

  // L, R 인덱스
  let lt = 0,
    rt = arr.length - 1;

  while (lt <= rt) {
    // 중간 지점 index
    let mid = parseInt((lt + rt) / 2);

    // 중간지점과 같다면
    if (arr[mid] === target) {
      answer = mid + 1; // 중간지점이 몇 번째에 있는지
      break;
      // 중간지점보다 작다면 : left(lt) ~ 중간-1(rt)
    } else if (arr[mid] > target) rt = mid - 1;
    // 중간지점보다 크다면 : 중간+1(lt) ~ right(rt)
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));