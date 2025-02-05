/**
 * Implements the chunk function.
 * @module
 */

/**
 * Splits an array into subarrays of the specified size.
 * @template T - the type of the array elements
 * @param {T[]} array - the array to split
 * @param {number} [size=1] - the maximum size of each subarray, expected to be a positive integer
 * @returns {T[][]|null} the array of subarrays; `null` if `array` is not an array or `size` is not a positive integer
 * @since 0.0.1
 * @category Array
 */
export function chunk<T>(array: T[], size: number = 1): T[][] | null {
  if (!Array.isArray(array)) return null
  if (!Number.isInteger(size) || size < 1) return null
  if (array.length === 0) return []
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}
