import { Person } from "./node.js";
export function createPerson() {
  return new Promise((resolve, reject) => {
    $.get("./person.json", function (res) {
      resolve(createPerson1(res));
    });
  });
}
function createPerson1(arr) {
  let personObj = {};
  arr.forEach((e) => {
    personObj[e.name] = new Person(e);
  });
  return personObj;
}
