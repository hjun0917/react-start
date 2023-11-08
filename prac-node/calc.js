// 계산 기능을 하는 파일

const add = (a, b) => a + b; // arrow function의 간단한 한 줄 코드를 다음과 같이 {} 없이 표현할때에는 return을 쓰지않는다.
const sub = (a, b) => a - b; // arrow function의 간단한 한 줄 코드를 다음과 같이 {} 없이 표현할때에는 return을 쓰지않는다.

module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};
// node.js는 모듈을 객체 단위로 내보낼 수 있다.
