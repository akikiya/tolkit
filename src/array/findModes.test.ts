import { assertEquals } from "@std/assert"
import { findModes } from "./findModes.ts"

Deno.test("findModes: returns empty array for empty array", () => {
  const input: number[] = []
  const expected: number[] = []
  assertEquals(findModes(input), expected)
})

Deno.test("findModes: returns single mode for array with one mode", () => {
  const input = [1, 2, 2, 3, 4]
  const expected = [2]
  assertEquals(findModes(input), expected)
})

Deno.test("findModes: returns multiple modes for array with multiple modes", () => {
  const input = [1, 1, 2, 2, 3]
  const expected = [1, 2]
  assertEquals(findModes(input), expected)
})

Deno.test("findModes: returns all elements as modes for all elements appearing equally", () => {
  const input = [1, 2, 3, 4]
  const expected = [1, 2, 3, 4]
  assertEquals(findModes(input), expected)
})

Deno.test("findModes: returns modes for array with negative numbers", () => {
  const input = [-1, -2, -2, -3, -3, -3]
  const expected = [-3]
  assertEquals(findModes(input), expected)
})

Deno.test("findModes: returns modes for array with mixed types", () => {
  const input = [1, "1", "1", 2, 2, 3]
  const expected = ["1", 2]
  assertEquals(findModes(input), expected)
})

Deno.test("findModes: throws TypeError for non-array input", () => {
  const input = "not an array"
  let errorThrown = false
  try {
    // deno-lint-ignore no-explicit-any
    findModes(input as any)
  } catch (e) {
    assertEquals(e instanceof TypeError, true)
    assertEquals((e as TypeError).message, "arr must be an array")
    errorThrown = true
  }
  assertEquals(errorThrown, true)
})

Deno.test("findModes: returns correct modes for large array", () => {
  const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10))
  const expected = findModes(input)
  const actualCountMap = input.reduce(
    (map, el) => map.set(el, (map.get(el) ?? 0) + 1),
    new Map<number, number>()
  )
  const actualMaxCount = Math.max(...actualCountMap.values())
  const actualModes = Array.from(actualCountMap.entries())
    .filter(([_, count]) => count === actualMaxCount)
    .map(([el, _]) => el)
  assertEquals(expected, actualModes)
})
