'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var i = 0
  while(random_numbers[i] !== target && i<values.length){
    i++
  }
  if(i>=values.length){
    return -1
  }
  else{
    return i 
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1
console.log("---------------------------")
// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var indexTarget = []

  for(var i=0 ; i<values.length ; i++){
    if(values[i]===target){
      indexTarget.push(i)
    }
  }
  if(indexTarget.length === 0){
    return "data tidak ditemukan"
  } else{
    return indexTarget
  }
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
