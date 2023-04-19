import { Person } from "./node.js";

// $.get("./person.json", (data, err) => {
//   const personarr = null;
//   personarr = data;

//   let persons = [];
//   personarr.forEach((e) => {
//     e.name = new Person(e);
//     persons.push(e.name);
//   });
// });

(async () => {
  let persons = [];
  let personarr = null;
  await $.get("./person.json", (data, status) => {
    personarr = data;
  });
  personarr.forEach((e) => {
    e.name = new Person(e);
    persons.push(e.name);
  });
  console.log(persons);
})();
