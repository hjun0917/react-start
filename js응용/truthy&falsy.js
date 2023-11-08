let a = undefined;

if (a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let b = "0";

if (b) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// TRUTHY 
// : "s", [], {}, 98, Infinity

// FALSY
// : 0, null, undefined, NaN, "", false

const getName = (person) => {
    if(!person) { // false Not => True
        return "객체가 아닙니다."
    }
    return person.name;
}

let person = null;
const name = getName(person);
console.log(name);