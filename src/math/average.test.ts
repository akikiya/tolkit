import { assertEquals } from "@std/assert"
import { average } from "./average.ts"

Deno.test("average function with positive numbers", () => {
  const nums = [1, 2, 3, 4, 5]
  const expectedAverage = 3
  assertEquals(average(nums), expectedAverage)
})

Deno.test("average function with negative numbers", () => {
  const nums = [-1, -2, -3, -4, -5]
  const expectedAverage = -3
  assertEquals(average(nums), expectedAverage)
})

Deno.test("average function with mixed positive and negative numbers", () => {
  const nums = [-1, 0, 1]
  const expectedAverage = 0
  assertEquals(average(nums), expectedAverage)
})

Deno.test("average function with decimal numbers", () => {
  const nums = [1.5, 2.5, 3.5]
  const expectedAverage = 2.5
  assertEquals(average(nums), expectedAverage)
})

Deno.test("average function with empty array", () => {
  const nums: number[] = []
  assertEquals(average(nums), undefined)
})

Deno.test("average function with non-numeric values", () => {
  const nums = [1, "a", 2, null, 3]
  // @ts-expect-error test for invalid input
  assertEquals(average(nums), undefined)
})

Deno.test("average function with NaN values", () => {
  const nums = [1, NaN, 2]
  assertEquals(average(nums), undefined)
})

Deno.test("average function with infinite values", () => {
  const nums = [1, Infinity, 2]
  assertEquals(average(nums), undefined)
})
