/**
 * Creates a new array with items inserted at a specified index.
 * @template T - the type of the array items
 * @param array - the array to insert items into
 * @param index - the index to insert items at
 * @param items - the items to insert
 * @returns a new array with the items inserted; `null` if `array` is not an array or `index` is not an integer
 * @since 0.0.1
 */
export function insert<T>(array: T[], index: number, ...items: T[]): T[] | null {
  if (!Array.isArray(array) || !Number.isInteger(index)) return null
  return array.slice(0, index).concat(items).concat(array.slice(index))
}

/**
 * Creates a new array with items inserted at the beginning.
 * @template T - the type of the array items
 * @param array - the array to insert items into
 * @param items - the items to insert
 * @returns a new array with the items inserted; `null` if `array` is not an array
 * @since 0.0.1
 */
export function unshift<T>(array: T[], ...items: T[]): T[] | null {
  return insert(array, 0, ...items)
}

/**
 * Creates a new array with items inserted at the end.
 * @template T - the type of the array items
 * @param array - the array to insert items into
 * @param items - the items to insert
 * @returns a new array with the items inserted; `null` if `array` is not an array
 * @since 0.0.1
 */
export function append<T>(array: T[], ...items: T[]): T[] | null {
  return insert(array, array.length, ...items)
}
