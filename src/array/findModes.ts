/**
 * Finds the modes of an array.
 * @param arr - the array to find the modes of
 * @returns the modes of the array
 * @throws TypeError - if arr is not an array
 * @since 0.6.0
 */
export function findModes<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) throw new TypeError("arr must be an array")
  const countMap = arr.reduce(
    (map, el) => map.set(el, (map.get(el) ?? 0) + 1),
    new Map<T, number>()
  )
  let maxCount = 0
  let modes: T[] = []
  for (const [el, count] of countMap) {
    if (count > maxCount) {
      maxCount = count
      modes = [el]
    } else if (count === maxCount) {
      modes.push(el)
    }
  }
  return modes
}
