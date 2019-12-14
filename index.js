// Add your functions here
function map(arr, func) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr;
}

function reduce(arr, func, starting) {
    let accum, i;
  
    if(!starting) {
      accum = arr[0];
      i = 1;
    } else {
      accum = starting;
      i = 0;
    }
    
    for(; i < arr.length; i++) {
      accum = func(arr[i], accum) 
    }
  
    return accum;
  }

  