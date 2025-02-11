/**
 * Earns the average of a number array.
 * If the array includes any non-number or NaN or Infinity, `undefined` will be returned.
 * @param nums - the number array
 * @returns the average of the number array
 * @since 0.6.0
 */
export function average(nums: number[]): number | void {
  if (!Array.isArray(nums)) return
  let sum = 0
  let count = 0
  for (const n of nums) {
    if (typeof n === "number" && !Number.isNaN(n) && Number.isFinite(n)) {
      sum += n
      count++
    } else return
  }
  if (count === 0) return
  return sum / count
}
