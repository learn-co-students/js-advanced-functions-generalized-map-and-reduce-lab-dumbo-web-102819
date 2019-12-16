function map (array, func) {
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(func(array[i]))
  }
  return newArr
}

// function reduce (array, func, total = 0) {
//   for (var i = 0; i < array.length; i++) {
//     total = func(array[i], total)
//   }
//   return total
// }

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
