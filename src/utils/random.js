// 得到一个两数之间的随机整数 包括两个数在内
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

export { getRandomInt }