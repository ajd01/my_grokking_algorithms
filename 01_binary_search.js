/*
 * Binary Seach
 *
 */
function search(list, val) {
  let low = 0
  let high = list.length-1
  let min = 0
  while (low <= high) {
    mid = parseInt((high+low)/2)
    if (list[mid] == val) return true
    if (list[mid] > val) {
      high = mid -1
    } else {
      low = mid + 1
    }
  }
  return false
}
const list = [2,5,7,9,10,13,17,19,23,26,28]
console.log(search(list, 28))