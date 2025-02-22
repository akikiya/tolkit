import { assertEquals, assertThrows } from "@std/assert"
import { throttle } from "./throttle.ts"

Deno.test("throttle - basic functionality", async () => {
  let counter = 0
  const increment = () => {
    counter++
  }

  const throttledIncrement = throttle(increment, 100)

  // First call should execute immediately
  throttledIncrement()
  assertEquals(counter, 1)

  // Calls within 100ms should be throttled
  throttledIncrement()
  throttledIncrement()
  assertEquals(counter, 1)

  // Call after 100ms should execute
  await new Promise(resolve => setTimeout(resolve, 100))
  throttledIncrement()
  assertEquals(counter, 2)
})

Deno.test("throttle - error handling", () => {
  // Test non-function argument
  assertThrows(
    () => {
      throttle(123 as any, 100)
    },
    TypeError,
    "Invalid arguments"
  )

  // Test non-number delay argument
  assertThrows(
    () => {
      throttle(() => {}, "100" as any)
    },
    TypeError,
    "Invalid arguments"
  )
})

Deno.test("throttle - this context", () => {
  const obj = {
    value: 0,
    increment() {
      this.value++
    },
  }

  const throttledIncrement = throttle(obj.increment.bind(obj), 100)
  throttledIncrement()
  assertEquals(obj.value, 1)
})
