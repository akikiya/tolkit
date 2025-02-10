import { assertEquals } from "@std/assert"
import { partition } from "./partition.ts"

Deno.test("partition function", () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const predicate = (el: number) => el % 2 === 0
  const [even, odd] = partition(arr, predicate)
  assertEquals(even, [2, 4, 6])
  assertEquals(odd, [1, 3, 5])
})

Deno.test("partition function with empty array", () => {
  const arr: number[] = []
  const predicate = (el: number) => el % 2 === 0
  const [even, odd] = partition(arr, predicate)
  assertEquals(even, [])
  assertEquals(odd, [])
})

Deno.test("partition function with single element", () => {
  const arr = [1]
  const predicate = (el: number) => el % 2 === 0
  const [even, odd] = partition(arr, predicate)
  assertEquals(even, [])
  assertEquals(odd, [1])
})

Deno.test("partition function with non-array input", () => {
  const arr = "not an array"
  const predicate = (el: number) => el % 2 === 0
  try {
    partition(arr as any, predicate)
  } catch (e) {
    assertEquals(e instanceof TypeError, true)
    assertEquals((e as TypeError).message, "Expected an array")
  }
})

Deno.test("partition function with non-function predicate", () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const predicate = "not a function"
  try {
    partition(arr, predicate as any)
  } catch (e) {
    assertEquals(e instanceof TypeError, true)
    assertEquals((e as TypeError).message, "Expected a function")
  }
})
