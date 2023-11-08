let arrTest = [1, "2", undefined, null, NaN, {}, []];
console.log(arrTest);

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[4]);

arr.push(6);
console.log(arr);

console.log(arr.length);

arr.pop(); // 배열은 stack인가? 그것은 아닌듯
console.log(arr);