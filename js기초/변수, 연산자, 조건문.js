let age = 29; // 변수를 선언한다.

console.log(age); // 변수의 이름을 넣으면 값이 출력된다. result => 29

age = 30;

console.log(age);

/**
 * 변수 작명 규칙 
 * 1. ^age => X / 변수에 기호를 사용할 수 없다. 예외!!! _(underscore), $
 * 2. 변수명은 반드시 숫자가 아닌 문자로 시작하여야 한다.
 * 3. 예약어는 변수명으로 사용할 수 없다. 
 */

// 변수 선언 키워드 - var, let
// 상수 선언 키워드 - const 
// -> 상수는 선언과 동시에 초기화해야한다. 최초 선언후에 재할당이 불가능하기 때문이다.
// var : 재할당, 재선언까지 가능
// let : 재할당 O, 재선언 불가능
// const : 재할당, 재선언 불가능

/**
 * Primitive Type 원시타입
 * - 한번에 하나의 값만 가질 수 있음.
 * - 하나의 고정된 저장 공간 이용
 * Non-Primitive Type 비 원시 타입
 * - 한번에 여러 개의 값을 가질 수 있음.
 * - 여러 개의 고정되지 않은 동적 공간 사용
 */
 
// 비교 연산 (= / == / ===)
let compareA = 1 == "1"; // true
console.log(compareA);
// = : 할당 연산자, 초기화
// == (!=) : 값 비교 연산자
// === (!==) : 값 & 타입 비교 연산자

// null 병합 연산자 (??)
// nullish 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.
// https://ko.javascript.info/nullish-coalescing-operator
/**
    a ?? b의 평가 결과는 다음과 같다.
    - a가 null도 아니고 undefined도 아니면 a
    - 그 외의 경우는 b
 */
 let c;
 let d;
 c = c ?? d?? 10;
 console.log(c);
 console.log(d);

// 반복문
// if
let a = 7;
if ( a >= 7) {
console.log("7 이상입니다.");
} else if ( a>= 5) {
console.log("5 이상입니다.");
} else {
console.log("5 미만입니다.")
}
// switch
let country = "ko";
switch(country) {
    case "jp":
        console.log("한국");
        break;
    case "us":
        console.log("미국");
        break;
    default:
        console.log("미분류");
        break;
} 