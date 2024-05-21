const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// [0] = 나무의 수, [1] = 필요 나무 길이
let list = [];
// 나무의 높이 배열
let woods = [];

let maxLength = 0;
let sum = 0;

function solution() {
  maxLength = woods[0];

  // 절단기의 길이를 찾을 때까지 반복
  for (let i = 0; i < woods[0]; i++) {
    // 필요 길이가 충분하지 못하면, 길이를 줄여서 반복
    if (sum < list[1]) {
      maxLength = woods[0] - i;
      cutter(maxLength);
    } else {
      console.log(maxLength);
      return;
    }
  }
}

// woods 안에서 잘린 나무 길이의 합 반복
function cutter(length) {
  sum = 0;

  for (let j = 0; j < list[0]; j++) {
    sum += woods[j] - length;

    // 필요 길이를 전부 구하면, 나머지 연산 없이 종료
    if (sum >= list[1]) {
      return;
    }
  }
}

rl.on("line", function (line) {
  if (!list.length) {
    list = line.split(" ").map((el) => Number(el));
  } else {
    // 내림차순 정렬
    woods = line
      .split(" ")
      .map((el) => Number(el))
      .sort((a, b) => b - a);

    return rl.close();
  }
}).on("close", function () {
  solution();
  process.exit();
});
