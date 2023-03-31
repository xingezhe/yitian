import { Person } from "./node.js";
// 张无忌
const zhang = new Person({
  name: "张无忌",
  says: [
    "张无忌语录1",
    "张无忌语录2",
    "张无忌语录3",
    "张无忌语录4",
    "张无忌语录5",
  ],
});

// 周芷若
const zhou = new Person({
  name: "周芷若",
  says: [
    "周芷若语录1",
    "周芷若语录2",
    "周芷若语录3",
    "周芷若语录4",
    "周芷若语录5",
  ],
});

// 赵敏
const zhao = new Person({
  name: "赵敏",
  says: ["赵敏语录1", "赵敏语录2", "赵敏语录3", "赵敏语录4", "赵敏语录5"],
});

// 小昭
const xiao = new Person({
  name: "小昭",
  says: ["小昭语录1", "小昭语录2", "小昭语录3", "小昭语录4", "小昭语录5"],
});

// 殷离
const yin = new Person({
  name: "殷离",
  says: ["殷离语录1", "殷离语录2", "殷离语录3", "殷离语录4", "殷离语录5"],
});
export {zhang, zhao, zhou, xiao, yin};
