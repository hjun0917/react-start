let width1 = 10;
let height1 = 20;

let width2 = 100;
let height2 = 10;

// let area1 = width1 * height1;
// console.log(area1);

function getArea() {
    let width = 10;
    let height = 10;
    
    let area = width * height;
    console.log(area);
} // 함수 선언식, 함수 선언 방식의 함수 생성

function getArea2(w, h) {
    return w * h;
}

let area1 = getArea2(width1, height1);
let area2 = getArea2(width2, height2);
console.log("area1 : ", area1);
console.log("area2 : ", area2);

getArea();

let getarea3 = function(w, h) { // w, h = 매개 변수
    console.log(w * h);
} // 함수 표현식

// 함수 선언식 -> 호이스팅 대상 O. 어느 곳에서든 사용 가능
function helloA() {
    return "Hi";
}

// 함수 표현식 -> 호이스팅 대상 X, 따라서 해당 코드가 초기화 된 후에만 사용 가능
let helloB = function () {
    return "Hi";
}

// 화살표 함수 ->  호이스팅 대상 X, 따라서 해당 코드가 초기화 된 후에만 사용 가능
let helloC = () => "Hi";

let helloD = () => {
    return "Hi";
};

// 콜백 함수
function checkMood(mood, goodCB, badCB) {
    if(mood === "good") {
        goodCB();
    } else {
        badCB();
    }
}

function cry() {
    console.log("Action :: CRY");
}
function sing() {
    console.log("Action :: SING");
}

function dance() {
    console.log("Action :: DANCE");
}

checkMood("good", dance, cry); // 함수를 값에 담는 것 -> 함수 표현식, 함수 표현식의 개념을 이용해서 cry()라는 함수를 cry라는 변수에 담아서 전달.
