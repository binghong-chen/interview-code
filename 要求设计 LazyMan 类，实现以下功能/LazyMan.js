// 第 56 题：要求设计 LazyMan 类，实现以下功能。

class LazyManClass {
  fnList = [];

  constructor(name) {
    this.fnList.push(() => console.log("Hi I am " + name));
    setTimeout(() => this.fnList.forEach((fn) => fn()));
  }
  sleep(time) {
    this.fnList.push(() => console.log(`等待了${time}秒...`));
    return this;
  }
  eat(food) {
    this.fnList.push(() => console.log("I am eating " + food));
    return this;
  }
  sleepFirst(time) {
    this.fnList.splice(1, 0, () => console.log(`等待了${time}秒...`));
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan("Tony");
// Hi I am Tony

LazyMan("Tony").sleep(10).eat("lunch");
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan("Tony").eat("lunch").sleep(10).eat("dinner");
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(10)
  .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
