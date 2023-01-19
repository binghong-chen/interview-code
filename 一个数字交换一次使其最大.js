// 3516
// 6513
// 5103 5301
function makeMax(num) {
    var splits = num
      .toString()
      .split("")
      .map((i) => +i);
    console.log(splits);
    makeMaxArray(splits, 0);
    console.log(splits);
  }
  
  function makeMaxArray(array, start) {
    // 开始时候没有考虑退出机制
    if (start >= array.length) {
      // 找到最后，已经最大，不用交换
      return;
    }
    let max = 0;
    let index = start;
    for (let i = start; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
        index = i;
      }
    }
    // 确保只交换一次，不会再递归下去
    if (index > start) {
      let t = array[start];
      array[start] = array[index];
      array[index] = t;
    } else {
      makeMaxArray(array, start + 1);
    }
  }
  
  makeMax(5103);
  makeMax(7712);
  makeMax(888886);
  makeMax(888868);
  makeMax(888888);
  