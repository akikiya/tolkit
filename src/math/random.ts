/**
 * Generates a random integer within a specified range.
 * @param {number} lower - The lower bound of the range (inclusive).
 * @param {number} upper - The upper bound of the range (exclusive by default).
 * @param {boolean} [isInclusive=false] - Whether the upper bound should be inclusive.
 * @returns {number} - The random integer within the specified range.
 * @throws {TypeError} - If lower or upper is not a finite number.
 * @throws {RangeError} - If lower is greater than upper.
 * @since 0.5.0
 */
export function randomInt(lower: number, upper: number, isInclusive: boolean = false): number {
  if (
    typeof lower !== "number" ||
    typeof upper !== "number" ||
    !Number.isFinite(lower) ||
    !Number.isFinite(upper)
  ) {
    throw new TypeError("lower and upper must be finite numbers")
  }
  lower = Math.floor(lower)
  upper = Math.floor(upper)
  if (lower > upper) throw new RangeError("lower must be less than or equal to upper")
  const range = upper - lower + (isInclusive ? 1 : 0)
  if (range === 0) return lower
  return Math.floor(Math.random() * range) + lower
}

/**
 * Generates a random floating-point number within a specified range.
 * @param {number} lower - The lower bound of the range (inclusive).
 * @param {number} upper - The upper bound of the range (exclusive).
 * @returns {number} - The random floating-point number within the specified range.
 * @throws {TypeError} - If lower or upper is not a finite number.
 * @throws {RangeError} - If lower is greater than upper.
 * @since 0.5.0
 */
export function randomFloat(lower: number, upper: number): number {
  if (
    typeof lower !== "number" ||
    typeof upper !== "number" ||
    !Number.isFinite(lower) ||
    !Number.isFinite(upper)
  ) {
    throw new TypeError("lower and upper must be finite numbers")
  }
  if (lower > upper) throw new RangeError("lower must be less than or equal to upper")
  return Math.random() * (upper - lower) + lower
}
