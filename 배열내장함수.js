// 배열 내장 함수!! 조아써!!

const arr = [1, 2, 3, 4, 5];
const newArr = [];

// for each
arr.forEach((elm) => console.log(elm)); // 콜백 함수로 화살표함수가 이용된 것.
/**
 * arr.forEach(function(elm) {
 *  console.log(elm);
 * }
 */

// map
// 1.
arr.map((elm) => {
    newArr.push(elm * 2);
}) 
console.log(newArr);
// 2.
const newArr2 = arr.map((elm) => {
    return elm * 2;
})
console.log(newArr2);

// includes (확인)
let number1 = 1;
let number2 = "1";
console.log(arr.includes(number1));
console.log(arr.includes(number2));

// indexOf
console.log(arr.indexOf(number1));
console.log(arr.indexOf(number2)); // 결과 값이 -1 이라면 해당 요소는 배열안에 없다!!!

// findIndex
const colors = [
    {num : 1, color : "red"},
    {num : 2, color : "blue"},
    {num : 3, color : "green"},
    {num : 4, color : "yellow"},
    {num : 5, color : "blue"},
]
console.log(colors.findIndex((elm) => elm.color === "green"));

// find
const element = colors.find((elm) => {
    return elm.color === "green";
});
console.log(element);

// filter
console.log(colors.filter((elm => elm.color === "blue")));

// filter & map 활용
const blues = colors.filter((elm => elm.color === "blue")).map((elm) => elm);
console.log(blues[1]);

// slice
// console.log(arr.slice(0,2)); // 0~1번 인덱스 출력
// concat
// cosole.log(arr.concat(arr2)); // arr1 뒤에 arr2를 붙임

// sort, 정렬
let chars = ["라", "마", "가", "다", "나"];
chars.sort(); //아래를 보면 원본 배열을 정렬해준다는 것을 알 수 있다.
console.log(chars)

let nums = [2, 30, 4, 40, 3, 20, 1, 10];
nums.sort(); 
console.log(nums);  // [1, 10, 2, 20, 3, 30, 4, 40]
// compare 함수를 선언해줌으로 써 해결이 가능
const compare = (a, b) => {
    if ( a > b ) {
        return 1;
    }
    if ( a < b ) {
        return -1;
    }
    return 0;
}
console.log(nums.sort(compare));

// join
const words = ["김형준", "님", "안녕하세요.", "좋은", "시간", "되세요."];
console.log(words.join(" "));