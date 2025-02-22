import { assertEquals, assertThrows } from "@std/assert"
import { debounce } from "./debounce.ts"

Deno.test("debounce - basic functionality", async () => {
  let counter = 0
  const increment = debounce(() => {
    counter++
  }, 100)

  increment()
  increment()
  increment()

  assertEquals(counter, 0) // Immediate check, counter should still be 0

  await new Promise(resolve => setTimeout(resolve, 150))
  assertEquals(counter, 1) // After delay, counter should be incremented to 1
})

Deno.test("debounce - parameter validation", () => {
  assertThrows(
    () => {
      // @ts-expect-error Testing invalid parameter
      debounce("not a function", 100)
    },
    TypeError,
    "Invalid arguments"
  )

  assertThrows(
    () => {
      // @ts-expect-error Testing invalid parameter
      debounce(() => {}, "100")
    },
    TypeError,
    "Invalid arguments"
  )
})

Deno.test("debounce - preserves this context", async () => {
  const obj = {
    value: 0,
    // @ts-expect-error Testing invalid parameter
    increment: debounce(function (this: { value: number }) {
      this.value++
    }, 100),
  }

  obj.increment()
  assertEquals(obj.value, 0)

  await new Promise(resolve => setTimeout(resolve, 150))
  assertEquals(obj.value, 1)
})

Deno.test("debounce - handles arguments", async () => {
  const sum = debounce((a: number, b: number) => {
    return a + b
  }, 100)

  let result: number | undefined
  sum(2, 3)
  sum(4, 5)
  sum(6, 7)

  await new Promise(resolve => setTimeout(resolve, 150))
  assertEquals(result, undefined) // debounce function doesn't return value
})
