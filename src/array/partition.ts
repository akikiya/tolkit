/**
 * Generates an array of two arrays from an array,
 * one containing the elements that satisfy the predicate,
 * and the other containing the elements that do not.
 * @param arr - the array to partition
 * @param predicate - the predicate function to test each element against
 * @returns the generated array
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
