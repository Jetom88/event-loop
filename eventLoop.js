const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

console.log("Hello");

setTimeout(() => {
  console.log("setTimeout은 매크로태스크 큐!!");
}, 1000);

console.log("Hi");

const promise = fetch(API_URL)
  .then((res) => {
    if (!res.ok) {
      throw new Error("promise error");
    }
    return res.json();
  })
  .then((data) => console.log("promise Data:", data))
  .catch((err) => console.log("err:", err));

console.log("Jetom");
