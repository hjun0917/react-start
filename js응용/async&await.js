// async = promise 처럼 비동기를 다루는 기능이자, 더 쉽게 이용할 수 있는 친구
function hello() {
  return "hello";
}

async function helloAsync() {
  // function 앞에 async를 붙여주게 되면
  return "hello Async";
} // 반환 값이 Promise 객체이다.

console.log(hello());
console.log(helloAsync()); // 따라서 다음과 같이 호출하면 -> Promise { 'hello Async' } -> 이러한 결과를 준다.

helloAsync().then((res) => {
  console.log(res);
});

// await

// await를 사용하지 않을 때
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(); // 이미 정의된 콜백함수를 실행시키기만 하면 된다면, 아래와 같이 콜백함수만 넘겨줘도 된다.
//     }, ms);
//   });
// }

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsyncAwait() {
  await delay(3000); // await을 비동기 함수의 호출 앞에 붙이게 되면, 비동기 함수가 마치 동기적인 함수처럼 작동한다.
  // 즉, await이 붙은 비동기 함수의 동작이 끝나기 전까지, 그 뒤의 함수는 실행되지 않는다!!!
  return "Hello Async Await";
} // await 키워드는 async가 붙은 함수 내부에서만 사용이

helloAsyncAwait().then((res) => {
  console.log(res);
});
