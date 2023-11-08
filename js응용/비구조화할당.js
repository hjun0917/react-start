// 배열의 비구조화 할당
let arr = ["one", "two", "three"];

// 1.
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 2.
// let [one, two, three] = arr;

// 3.
// let [one, two, three, four] = ["one", "two", "three"]; // four = undefined
// let [one, two, three, four = "four"] = ["one", "two", "three"]; // four는 four이라는 기본값으로 셋팅된다.

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// 스왑
let a = 10;
let b = 20;
let tmp = 0;

// 1.
// tmp = a;
// a = b;
// b = tmp;

// 2.
[a, b] = [b, a];
console.log(a, b);

// 객체 비구조화 할당
let object = {
  one: "one",
  two: "two",
  thre: "three",
};

// let one = object.one;
// console.log(one);

// let { three, two, one } = object; // 순서는 상관없다. 순서가아닌 KEY값으로 비 구조화 할당이 이루어짐.
let { three, two, one: realOne } = object; // one이라는 key값이 가진 value를 realOne이라는 변수에 할당하겠다!!!

console.log(realOne, two, three);
