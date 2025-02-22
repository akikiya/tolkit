// deno-lint-ignore-file

/**
 * Creates a new functions that caches the results of a given function.
 * @param fn - the function to memoize
 * @param maxCacheSize - the maximum size of the cache
 * @returns the memoized function
 * @since 0.9.0
 */
export function memoize<T extends (...args: any[]) => any>(fn: T, maxCacheSize = 1000): T {
  // for caching primitive type arguments
  const primitiveCache = new Map<string, ReturnType<T>>()
  // for caching object type arguments
  const objectCache = new WeakMap<object, ReturnType<T>>()

  return function (this: any, ...args: Parameters<T>): ReturnType<T> {
    // If there's only one argument and it's an object
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null) {
      const obj = args[0]
      if (objectCache.has(obj)) return objectCache.get(obj)!
      const result = fn.apply(this, args)
      objectCache.set(obj, result)
      return result
    }
    // Handle primitive types or multiple parameters
    const key = args
      .map(arg => (typeof arg === "object" && arg !== null ? JSON.stringify(arg) : String(arg)))
      .join("|")
    if (primitiveCache.has(key)) {
      return primitiveCache.get(key)!
    }
    // If cache exceeds limit, remove the oldest entry
    if (primitiveCache.size >= maxCacheSize) {
      const firstKey = primitiveCache.keys().next().value!
      primitiveCache.delete(firstKey)
    }
    const result = fn.apply(this, args)
    primitiveCache.set(key, result)
    return result
  } as T
}
