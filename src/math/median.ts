/**
 * Splits an array into two parts,
 * with elements less than the pivot on the left
 * and elements greater than or equal to the pivot on the right.
 * @param arr - the array to be partitioned
 * @param left - the left index of the array
 * @param right - the right index of the array
 * @returns the index of the pivot element
 * @since 0.6.0
 */
function partition(arr: number[], left: number, right: number): number {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
  const pivotValue = arr[pivotIndex]
  ;[arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]
  let storeIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      ;[arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]]
      storeIndex++
    }
  }
  ;[arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]]
  return storeIndex
}

/**
 * Uses an iterative approach
 * to continuously narrow down the search range
 * until the kth smallest element is found.
 * @param arr - the array to be searched
 * @param left - the left index of the array
 * @param right - the right index of the array
 * @param k - the index of the element to be found
 * @returns the kth smallest element
 * @since 0.6.0
 */
function select(arr: number[], left: number, right: number, k: number): number {
  while (left < right) {
    const pivotIndex = partition(arr, left, right)
    if (k === pivotIndex) {
      return arr[k]
    } else if (k < pivotIndex) {
      right = pivotIndex - 1
    } else {
      left = pivotIndex + 1
    }
  }
  return arr[k]
}

/**
 * Obtains the median of an array of numbers.
 * @param arr - the array of numbers
 * @returns the median of the array
 * @since 0.6.0
 */
export function median(arr: number[]) {
  const arrCopy = arr.slice()
  const len = arrCopy.length
  const mid = Math.floor(len / 2)
  if (len % 2 === 1) {
    return select(arrCopy, 0, len - 1, mid)
  } else {
    const a = select(arrCopy, 0, len - 1, mid - 1)
    const b = select(arrCopy, 0, len - 1, mid)
    return (a + b) / 2
  }
}
