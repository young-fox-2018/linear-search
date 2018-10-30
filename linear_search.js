'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var result = 0
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target) {
      result = result + 1
    }
  }
  if (result !== 0) {
    return result
  }
  else {
    return -1
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var result = []
  for (var i = 0; i < values.length; i++) {
    if (target === values[i]) {
      result.push(i)
    }
  }
  if (result.length === 1) {
    return result[0]
  }
  else {
    return result
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
