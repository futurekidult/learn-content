//公共方法,比如时间转换
export const timestampToTime = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let Y = `${date.getFullYear()}-`;
  let M = `${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-`;
  let D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} `;
  let h = `${date.getHours()}:`;
  let m = `${date.getMinutes()}:`;
  let s = date.getSeconds();
  return Y + M + D + h + m + s;
};

export const timeToTimestamp = (time) => {
  let date = new Date(time);
  return date.getTime() / 1000;
};
