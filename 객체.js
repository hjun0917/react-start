const person = new Object(); // new = 객체 생성 키워드, 생성자 방식
let people = {
    key1 : "value1", // property (객체 프로퍼티)
    key2 : "value2",
    key3 : null, // key1 ~ key3 : 멤버
    key4 : function() {}, // 메서드
} // 객체 리터럴 방식 
// 키의 중복을 막지는 않는다. (허용)
// 하지만 property를 탐색할 때, 가장 뒤에있는 것을 기준으로 찾기 때문에 앞에 있느 property가 무시되기 때문에 중복시키지 않는다. 

console.log(people);
console.log(people.key1); // value에 접근하는 "점 표기법"
console.log(people["key1"]); // value에 접근하는 "괄호 표기법", 괄호 내부의 key는 반드시 문자열("")로 작성해줘야한다.
console.log(typeof people.key1); 

console.log(getPropertyValue("key1"));
console.log(getPropertyValue("key3"));

function getPropertyValue(key) {
    return people[key];
}

people.location = "광주";
console.log(people);

people.key1 = "김형준";
console.log(people);

// const(상수)로 선언한 객체의 property도 접근하여 교체가 가능하다.
// why??? 객체 자체를 수정하는 것이 아니기때문에, 객체 자체의 수정이란 새롭게 대입연산을 하는 경우. 아래의 예시 확인,
// person = {
//     age : 30,
// }
// console.log(person);

delete people.location; // property를 삭제하는 방법, 하지만 메모리 자체에서 삭제하는 것이 아님을 기억할 것
console.log(people);

people.key1 = null; // 이 방법을 더 추천
console.log(people);

// 객체안에 property가 있는지 확인하는 방법
console.log(`name : ${"name" in people}`);
console.log(`name : ${"key1" in people}`);
