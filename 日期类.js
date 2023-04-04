// 程序设计——日期类
// 设计一个日期类,要求:

// 运算符重载,日期可以比较,计算
// 计算两个日期之间的天数间隔时,需要考虑跳过部分日期的情况(节假日跳过).

class MyDate {
  #year;
  #month;
  #date;
  #from20000101

  constructor(year, month, date) {
    this.#year = year;
    this.#month = month;
    this.#date = date;
  }
  isLeapYear() {
    return (
      this.year % 400 === 0 || (this.year % 100 !== 0 && this.year % 4 === 0)
    );
  }
  add({year, month, date}){
    if (year) this.#year += year
    if (month) this.#month += month
    if (date) this.#date += date
  }
  equal(date) {
    return (
      this.#year === date.#year &&
      this.#month === date.#month &&
      this.#date === date.#date
    );
  }
  isBefore(date) {
    if (this.#year < date.#year) return true;
    if (this.#month < date.#month) return true;
    if (this.#date < date.#date) return true;
    return false;
  }
  diffrence(date) {
    let result = 0;
    let sign = 1;
    let date1 = this;
    let date2 = date;
    if (this.isBefore(date)) {
      sign = -1;
      date1 = date;
      date2 = this;
    }
    let month1 = date1.#month
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  isBetween(date1, date2) {

  }
  toString() {
    return `${this.#year}-${this.#month}-${this.#date}`
  }
}
