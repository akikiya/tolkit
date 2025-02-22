import { assertEquals } from "@std/assert"
import { memoize } from "./memoize.ts"

Deno.test("memoize - basic functionality", () => {
  let callCount = 0
  const add = (a: number, b: number) => {
    callCount++
    return a + b
  }

  const memoizedAdd = memoize(add)

  // First call should execute the function
  assertEquals(memoizedAdd(1, 2), 3)
  assertEquals(callCount, 1)

  // Second call with same arguments should use cache
  assertEquals(memoizedAdd(1, 2), 3)
  assertEquals(callCount, 1)

  // Different arguments should execute the function
  assertEquals(memoizedAdd(2, 3), 5)
  assertEquals(callCount, 2)
})

Deno.test("memoize - object caching", () => {
  let callCount = 0
  const processObject = (obj: { id: number }) => {
    callCount++
    return obj.id * 2
  }

  const memoizedProcess = memoize(processObject)
  const testObj = { id: 1 }

  // First call should execute the function
  assertEquals(memoizedProcess(testObj), 2)
  assertEquals(callCount, 1)

  // Same object reference should use cache
  assertEquals(memoizedProcess(testObj), 2)
  assertEquals(callCount, 1)

  // Different object with same content should execute function
  assertEquals(memoizedProcess({ id: 1 }), 2)
  assertEquals(callCount, 2)
})

Deno.test("memoize - cache size limit", () => {
  let callCount = 0
  const getValue = (n: number) => {
    callCount++
    return n * 2
  }

  const memoizedGetValue = memoize(getValue, 2)

  // Fill cache
  memoizedGetValue(1)
  memoizedGetValue(2)
  assertEquals(callCount, 2)

  // Add one more, should remove oldest entry
  memoizedGetValue(3)
  assertEquals(callCount, 3)

  // First value should be evicted and recalculated
  memoizedGetValue(1)
  assertEquals(callCount, 4)

  // Recent values should still be cached
  memoizedGetValue(2)
  memoizedGetValue(1)
  assertEquals(callCount, 5)
})

Deno.test("memoize - this context", () => {
  class Calculator {
    multiplier = 2

    constructor() {
      this.multiply = memoize(this.multiply.bind(this))
    }

    multiply(n: number) {
      return n * this.multiplier
    }
  }

  const calc = new Calculator()
  assertEquals(calc.multiply(5), 10)
  assertEquals(calc.multiply(5), 10)
})
