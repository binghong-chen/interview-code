// 非递归，迭代版本
// 3516
// 6513
// 5103 5301
function makeMax(num) {
  var splits = num
    .toString()
    .split("")
    .map((i) => +i);

  let swaped = false;
  for (let start = 0; start < splits.length; start++) {
    let max = 0;
    let index = start;
    for (let i = start; i < splits.length; i++) {
      if (splits[i] > max) {
        max = splits[i];
        index = i;
      }
    }
    // 确保只交换一次S
    if (index > start) {
      console.log("swap", start, index);
      let t = splits[start];
      splits[start] = splits[index];
      splits[index] = t;
      swaped = true;
      break;
    }
  }
  if (!swaped) {
    console.log("no swap");
  }
  const res = +splits.join("");
  console.log(num, res);
  return res;
}

makeMax(5103);
makeMax(7712);
makeMax(888886);
makeMax(888868);
makeMax(888888);
