/**
 * Creates a new function that will only be called at most once per every `delay` milliseconds.
 * @param fn - the function to throttle
 * @param delay - the number of milliseconds to throttle invocations to
 * @returns the throttled function
 * @throws TypeError if `fn` is not a function or `delay` is not a number
 * @since 0.8.0
 */
export function throttle<T extends (this: unknown, ...args: any[]) => void>(
  fn: T,
  delay: number
): T {
  if (typeof fn !== "function" || typeof delay !== "number") {
    throw new TypeError("Invalid arguments")
  }
  let last: number = 0
  return function (this: unknown, ...args: Parameters<T>): void {
    const now = Date.now()
    if (now - last >= delay) {
      fn.apply(this, args)
      last = now
    }
  } as T
}
