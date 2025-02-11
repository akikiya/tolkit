import { assertEquals } from "@std/assert"
import { median } from "./median.ts"

Deno.test("median function with odd number of elements", () => {
  const arr = [1, 3, 3, 6, 7, 8, 9]
  const expectedMedian = 6
  assertEquals(median(arr), expectedMedian)
})

Deno.test("median function with even number of elements", () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const expectedMedian = 3.5
  assertEquals(median(arr), expectedMedian)
})

Deno.test("median function with single element", () => {
  const arr = [1]
  const expectedMedian = 1
  assertEquals(median(arr), expectedMedian)
})

Deno.test("median function with empty array", () => {
  const arr: number[] = []
  const expectedMedian = NaN
  assertEquals(median(arr), expectedMedian)
})

Deno.test("median function with all elements the same", () => {
  const arr = [2, 2, 2, 2, 2]
  const expectedMedian = 2
  assertEquals(median(arr), expectedMedian)
})

Deno.test("median function with negative numbers", () => {
  const arr = [-1, -2, -3, -4, -5]
  const expectedMedian = -3
  assertEquals(median(arr), expectedMedian)
})
