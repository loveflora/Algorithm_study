const a = [1, 2, 3, 4, 5, 6, 7, 8];

const bs = () => {
  let lo = 0; // 배열 처음
  let hi = a.length - 1; // 끝

  const target = 3;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (a[mid] == target) {
      console.log(target);
      return;
    } else if (a[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
};

bs();
