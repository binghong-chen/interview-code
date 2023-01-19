// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/102
// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
function intersection(nums1, nums2) {
  console.log(nums1, nums2);
  let map1 = new Map();
  let map2 = new Map();
  for (let key of nums1) map1.set(key, map1.has(key) ? map1.get(key) + 1 : 1);
  for (let key of nums2) map2.set(key, map2.has(key) ? map2.get(key) + 1 : 1);
  let res = [];
  map1.forEach((value, key) => {
    if (!map2.has(key)) return;
    let count = Math.min(value, map2.get(key));
    res = res.concat(Array.from({ length: count }).fill(key));
  });

  return res;
}

console.log(intersection([], []));
console.log(intersection([1], []));
console.log(intersection([], [1]));
console.log(intersection([1], [1]));
console.log(intersection([1], [2]));
console.log(intersection([2], [1]));
console.log(intersection([1, 1], [1]));
console.log(intersection([1, 1], [1, 1]));
console.log(intersection([1, 2, 2, 1], [2, 2]));
