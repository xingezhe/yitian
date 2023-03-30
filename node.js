//静夜思
//床前明月光，疑是地上霜
//举头望明月，低头思故乡

export class Person {
  constructor(obj) {
    Object.keys(obj).forEach((e) => {
      this[e] = obj[e];
    });
  }
  index = 0;
  say = function () {
    console.log(`${this.name}：${this.says[this.index]}`);
    this.index++;
  };
}
