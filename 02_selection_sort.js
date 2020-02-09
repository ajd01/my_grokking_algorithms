/**
 * 
 *  Selection Sort O(n^2)
 * 
*/
const assert = require('assert')

function selectionSort(list) {
  let result = []
  let last = 0
  for (let i in list) {
    let smallest = 0
    for (let e in list) {
      if (smallest == 0 && result.indexOf(list[e]) < 0) {
        smallest = list[e]
      }
      if (list[e] < smallest && result.indexOf(list[e]) < 0) {
        smallest = list[e]
      }
    }
    result.push(smallest)
    last = smallest
  }
  const expected = list.sort((a,b)=>a-b)
  console.log(expected)
  assert.deepEqual(result, expected, `Not correct result expected \n${result} \nto be equal to \n${expected}`)
  return expected
}

const list = [12,32,45,78,98,65,1,8,35,99]
console.log(selectionSort(list))


