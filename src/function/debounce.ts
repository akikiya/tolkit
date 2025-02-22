/**
 * Creates a new function that will only be executed after the delay has passed since the last time it was invoked.
 * @param fn - the function to debounce
 * @param delay - the delay in milliseconds
 * @returns the debounced function
 * @throws TypeError if `fn` is not a function or `delay` is not a number
 * @since 0.8.0
 */
export function debounce<T extends (this: unknown, ...args: any[]) => void>(
  fn: T,
  delay: number
): T {
  if (typeof fn !== "function" || typeof delay !== "number") {
    throw new TypeError("Invalid arguments")
  }
  let timeoutId: number
  return function (this: unknown, ...args: any[]): void {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  } as T
}
