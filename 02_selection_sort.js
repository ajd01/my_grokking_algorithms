/**
 * 
 *  Selection Sort O(n^2)
 * 
*/
const assert = require('assert')

function getSmall(list) {
  let small = list[0]
  let smallIndex = 0
  for (let i in list) {
    if (list[i] <= small) {
      small = list[i]
      smallindex = i
    }
  }
  return smallindex
}

function selectionSort(list) {
  const expected = [...list].sort((a,b)=>a-b)
  const original = [...list]
  let result = []
  for (let i in original) {
    let smallest = getSmall(list)
    result.push(list.splice(smallest,1))
  }
  assert.deepEqual(
    result.toString(), 
    expected.toString(), 
    `Not correct result expected \n${result} \nto be equal to \n${expected}`
  )
  return expected
}

const list = [12,32,45,78,98,65,1,8,35,99]
console.log(selectionSort(list))


