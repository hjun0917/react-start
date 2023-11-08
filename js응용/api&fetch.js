async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

// fetch 자바 스크립트에서 API를 호출할 수 있도록 도와주는 내장 함수.

// response.then((res) => console.log(res));
getData();
