/**
 * Generates an array of two arrays from an array,
 * one containing the elements that satisfy the predicate,
 * and the other containing the elements that do not.
 * @param arr - the array to partition
 * @param predicate - the predicate function to test each element against
 * @returns the generated array
 * @throws TypeError - if `arr` is not an array or `predicate` is not a function
 * @since 0.5.0
 */
export function partition<T>(arr: T[], predicate: (el: T) => boolean): T[][] {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array")
  if (typeof predicate !== "function") throw new TypeError("Expected a function")
  const accepted = []
  const rejected = []
  for (const el of arr) {
    if (predicate(el)) accepted.push(el)
    else rejected.push(el)
  }
  return [accepted, rejected]
}
