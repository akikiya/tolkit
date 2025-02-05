/**
 * Obtains the intersection set between two arrays.
 * @template T - the type of the elements in the arrays
 * @param {T[]} array1 - the first array
 * @param {T[]} array2 - the second array
 * @returns {T[]|null} - the difference between the two arrays; `null` if either `array1` or `array2` is not an array
 * @since 0.1.0
 * @category Array
 */
export function intersection<T>(array1: T[], array2: T[]): T[] | null {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return null
  return array1.filter(item => array2.includes(item))
}

/**
 * Obtains the difference set between two arrays.
 * @template T - the type of the elements in the arrays
 * @param {T[]} array1 - the first array
 * @param {T[]} array2 - the second array
 * @returns {T[]|null} - the difference between the two arrays; `null` if either `array1` or `array2` is not an array
 * @since 0.1.0
 * @category Array
 */
export function difference<T>(array1: T[], array2: T[]): T[] | null {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return null
  return array1.filter(item => !array2.includes(item))
}
