function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

// isPositive(
//   [],
//   (res) => {
//     console.log("Success : ", res);
//   },
//   (err) => {
//     console.log("Fail : ", err);
//   }
// );

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // excutor = 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
        console.log(number);
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor); // Promise를 생성자로 선언(생성)해주고, 인자로 실행함수를 넣으면, 상위 함수 호출을 하였을 때 인자로 받은 함수가 실행됨.
  return asyncTask;
}

const res = isPositiveP(10); // isPositiveP의 return(반환)값은 Promise 객체, 이 객체를 활용해 자유롭게 결과값을 사용할 수 있다.
res
  .then((res) => {
    // then, resolve에 있는 결과값을 받아올 수 있다.
    console.log("success : ", res);
  })
  .catch((err) => {
    // catch, reject에 있는 결과값을 받아올 수 있다.
    console.log("fail : ", err);
  });

// ======
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    // exscutor를 분리하지 않고, 다음과 같이 풀어서 함수로 나타낼 수 있음.
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// taskA(3, 4, (a_res) => {
//   console.log("task A : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("task B : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C : ", c_res);
//     });
//   });
// });

// 어떤 함수가 Promise를 반환한다는 것은,
// 어떤 함수가 비동기적으로 동작하고,
// 반환받은 Promise객체를 이용해서 then, catch로 비동기 처리의 결과값을 활용하겠다!

// Promise 객체를 이용했지만 callback HELL에서 벗어나지는 못했다.
taskA(5, 1).then((a_res) => {
  console.log("result A : ", a_res);
  taskB(a_res).then((b_res) => {
    console.log("result B : ", b_res);
    taskC(b_res).then((c_res) => {
      console.log("result C : ", c_res);
    });
  });
});

// 해결!!! -> then chaining
taskA(5, 1)
  .then((a_res) => {
    console.log("result A : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("result B : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("result C : ", c_res);
  });

// + 호출하는 then chaining (promise)를 이용하여 호출하는 코드와 결과를 처리하는 코드를 분리해줄 수 있다.
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("result A : ", a_res);
  return taskB(a_res);
});

console.log("중간에 끼워 넣어야지~");

bPromiseResult
  .then((b_res) => {
    console.log("result B : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("result C : ", c_res);
  });
