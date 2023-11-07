console.log("hj");
console.log("hj");
console.log("hj");
console.log("hj");
console.log("hj");
// 반복문을 이용한 개선 -> 
for (let i = 0; i < 5; i++) { // (초기식; 조건식; 증감식)
    console.log("hj");
}

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const person = {
    name: "김형준",
    age: 29,
    tall: 180
}

const keys = Object.keys(person);
console.log(keys); // [ 'name', 'age', 'tall' ]
for(let i = 0; i < keys.length; i++) {
    let curKey = keys[i];
    let curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}

const values = Object.values(person);
for(let i = 0; i < keys.length; i++) {
    console.log(values[i]);
}