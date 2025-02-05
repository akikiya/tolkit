/**
 * Implements array insertion functions.
 * @module
 */

/**
 * Inserts items into an array at the specified index.
 * @template T - the type of the array items
 * @param {T[]} array - the array to insert items into
 * @param {number} index - the index to insert items at
 * @param {T[]} items - the items to insert
 * @returns {T[]|null} a new array with the items inserted; `null` if `array` is not an array or `index` is not an integer
 * @since 0.0.1
 * @category Array
 */
export function insert<T>(array: T[], index: number, ...items: T[]): T[] | null {
  if (!Array.isArray(array)) return null
  if (!Number.isInteger(index)) return null
  return array.slice(0, index).concat(items).concat(array.slice(index))
}

/**
 * Inserts items into the beginning of an array.
 * @template T - the type of the array items
 * @param {T[]} array - the array to insert items into
 * @param {T[]} items - the items to insert
 * @returns {T[]|null} a new array with the items inserted; `null` if `array` is not an array
 * @since 0.0.1
 * @category Array
 */
export function unshift<T>(array: T[], ...items: T[]): T[] | null {
  return insert(array, 0, ...items)
}

/**
 * Inserts items into the end of an array.
 * @template T - the type of the array items
 * @param {T[]} array - the array to insert items into
 * @param {T[]} items - the items to insert
 * @returns {T[]|null} a new array with the items inserted; `null` if `array` is not an array
 * @since 0.0.1
 * @category Array
 */
export function append<T>(array: T[], ...items: T[]): T[] | null {
  return insert(array, array.length, ...items)
}
