const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// N = 나무의 수, M = 집에 가져갈 나무의 길이
let list = [];

// 나무의 높이
let woods = [];

function solution() {
  console.log(list);
  console.log(woods);
}

// 입력
rl.on("line", function (line) {
  if (!list.length) {
    list = line.split(" ").map((el) => Number(el));
  } else {
    woods = line.split(" ").map((el) => Number(el));

    return rl.close();
  }
}).on("close", function () {
  // 입력 종료
  solution();
  process.exit();
});
