// deno-lint-ignore-file no-explicit-any

/**
 * Check if a value is an async function.
 * @param value - the value to check
 * @returns whether the value is an async function or not
 * @since 0.7.0
 */
export function isAsyncFn(value: any): value is (...args: any[]) => Promise<any> {
  return Object.prototype.toString.call(value) === "[object AsyncFunction]"
}
