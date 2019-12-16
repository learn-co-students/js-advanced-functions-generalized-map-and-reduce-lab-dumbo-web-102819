function map (array, func) {
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(func(array[i]))
  }
  return newArr
}

// function reduce (array, func, total = 0) {
//   for (let i = 0; i < array.length; i++) {
//     total = func(array[i], total)
//   }
//   return total
// }


// there must be a better way to choose whether or not to iterate from index 0 than this! solution:
function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
