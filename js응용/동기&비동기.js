function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * a;
    cb(res);
  }, 1000);
}

// taskA(3, 4, (res) => {
//   console.log("Finish Task A : ", res);
// });

// taskB(3, (res) => {
//   console.log("Finish Task B : ", res);
// });

taskA(4, 5, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    // 비동기 코드가 계속해서 중첩되면 그 결과값을 사용하기 위한 콜백함수가 끊임없이
    // 쌓여 가독성을 해치는 경우가 생기기도함. => 콜백 함수
  });
});

// Call Stack에 컨텍스트들이 쌓인다.
// 비동기 코드는 Web APIs 영역으로 넘어가며, Call Stack에서 제거 된다.
// taskA를 예시로들면, 위의 설명에 따라 동작한 후, 3초를 기다린다.
// 3초 후에 cb 함수가 Callback Queue로 옮겨간다.
// 옮겨간 후 Call Stack의 컨텍스트를 계속 확인하며, MainContext만 남게 될 때, Event Loop를 통해 작업을 마저 수행한다.
