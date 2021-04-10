import { getName } from "./name";

import "./scss/style.scss";
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}
document.querySelector("#get-data").addEventListener("click", () => {
  getData();
});
