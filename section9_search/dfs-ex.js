const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

//  1 - 2 - 4
//    - 3 - 4
//        - 5

const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return; // 이미 방문했으면, 방문 처리 X
  visited.add(here); // 방문 처리
  console.log(here);

  graph[here].forEach((e) => dfs(e, visited));
};

dfs(1);
// 1 - 2 - 4 - 3 - 5
