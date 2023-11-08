let a = 3;
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}
// ->
a >= 0 ? console.log("양수") : console.log("음수");

let arr = [];
// arr.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
const arrayStatus = arr.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let aa;
const result = aa ? true : false;
console.log(result);

let aaa = [];
const result2 = aaa ? true : false;
console.log(result2);

// 삼항연산자 중첩 -> 코드의 가독성을 해치기 때문에, 가급적 중첩 if문을 사용하자
let score = 40;
score >= 90
  ? console.log("A")
  : score >= 50
  ? console.log("B")
  : console.log("F");
