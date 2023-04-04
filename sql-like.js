var data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];

var find = function (origin) {
  Array.prototype.where = function (conditions) {
    for (let key in conditions)
      origin = origin.filter((item) => conditions[key].test(item[key]));
    return origin;
  };
  Array.prototype.orderBy = function (field, type) {
    origin.sort((a, b) => (type === "desc" ? -1 : 1) * (a[field] - b[field]));
    return origin;
  };
  return origin;
};

var result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy("userId", "desc");

console.log(result);
console.log(find(data).where({ title: /\d$/, userId: /8$/ }));
console.log(find(data).where({ title: /\d$/ }).where({ userId: /8$/ }));
