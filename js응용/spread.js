// 객체 spread
const cookie = {
  base: "cookie",
  madein: "korea",
};

const chocoCookey = {
  base: "cookie",
  madein: "korea",
  toping: "choco",
};

const greanTeaCookie = {
  ...cookie, // ... = spread 연산자 -> 객체의 값을 새로운 객체에 풀어주는 역할
  toping: "greanTea",
};

console.log(cookie);
console.log(chocoCookey);
console.log(greanTeaCookie);

const testCookie = {
  ...greanTeaCookie,
  extraToping: "choco",
};

console.log(testCookie);

// 배열 spread
const nonTopingCookies = ["촉쿠", "바쿠"];
const topingCookies = ["초쿠", "딸쿠", "말쿠", "블쿠"];

const allCookies = [...nonTopingCookies, "함쿠", ...topingCookies];
console.log(allCookies);
// 배열의 원소를 순서대로 펼칠 수 있다.
// concat과 유사하지만 concat보다 유연하게 사용할 수 있다.
