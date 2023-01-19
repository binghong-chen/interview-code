// ['11:20', '16:18', '22:22']
function averageTime(times) {
  var timeTotal =
    times
      .map((time) => +new Date("2023-01-01 " + time))
      .reduce((s, v) => s + v) / times.length;
  const time = new Date(timeTotal);
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  return `${hour}:${minute}`;
}

const time = averageTime(["11:20", "16:18", "22:22"]);
console.log(time);
