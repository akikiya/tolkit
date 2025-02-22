/**
 * Creates a new function that will only be invoked at most once.
 * @param fn - the function to be wrapped
 * @returns the wrapped function
 * @since 0.9.0
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false
  let result: ReturnType<T>

  return function (this: any, ...args: Parameters<T>): ReturnType<T> {
    if (!called) {
      called = true
      result = fn.apply(this, args)
    }
    return result
  } as T
}
