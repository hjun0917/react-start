console.log(true && true); // and
console.log(true || false); // or
console.log(!true); // not

// const getName = (person) => {
//   if (!person) {
//     return "NOT OBJECT";
//   }
//   return person.name;
// };

const getName = (person) => {
  const name = person && person.name;
  return name || "NOT OBJECT";
};

let person = { name: "김형준" };
const name = getName(person);
console.log(name);
