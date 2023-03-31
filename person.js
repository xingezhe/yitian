import { Person } from "./node.js";
// import  $  from "jquery";

const personarr = [
  {
    name: "张无忌",
    says: [
      "1F600",
      "张无忌语录1",
      "张无忌语录2",
      "张无忌语录3",
      "张无忌语录4",
      "张无忌语录5",
    ],
  },
  {
    name: "赵敏",
    says: ["赵敏语录1", "赵敏语录2", "赵敏语录3", "赵敏语录4", "赵敏语录5"],
  },
  {
    name: "周芷若",
    says: [
      "周芷若语录1",
      "周芷若语录2",
      "周芷若语录3",
      "周芷若语录4",
      "周芷若语录5",
    ],
  },
  {
    name: "小昭",
    says: ["小昭语录1", "小昭语录2", "小昭语录3", "小昭语录4", "小昭语录5"],
  },
  {
    name: "殷离",
    says: ["殷离语录1", "殷离语录2", "殷离语录3", "殷离语录4", "殷离语录5"],
  },
  {
    name: "谢逊",
    says: ["谢逊语录1", "谢逊语录2", "谢逊语录3", "谢逊语录4", "谢逊语录5"],
  },
];
export let persons = [];
personarr.forEach((e) => {
  e.name = new Person(e);
  persons.push(e.name);
});

