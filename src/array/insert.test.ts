// deno-lint-ignore-file no-explicit-any
import { assertEquals } from "@std/assert"
import { insert, unshift, append } from "./insert.ts"

Deno.test("insert: inserts items at the specified index", () => {
  const array = [1, 2, 4, 5]
  const index = 2
  const items = [3]
  const expected = [1, 2, 3, 4, 5]
  const result = insert(array, index, ...items)
  assertEquals(result, expected)
})

Deno.test("insert: returns null if array is not an array", () => {
  const array: any = "not an array"
  const index = 1
  const items = [2]
  const result = insert(array, index, ...items)
  assertEquals(result, null)
})

Deno.test("insert: returns null if index is not an integer", () => {
  const array = [1, 2, 3]
  const index: any = 1.5
  const items = [4]
  const result = insert(array, index, ...items)
  assertEquals(result, null)
})

Deno.test("insert: inserts multiple items at the specified index", () => {
  const array = [1, 2, 5]
  const index = 2
  const items = [3, 4]
  const expected = [1, 2, 3, 4, 5]
  const result = insert(array, index, ...items)
  assertEquals(result, expected)
})

Deno.test("unshift: inserts items at the beginning of the array", () => {
  const array = [2, 3, 4]
  const items = [0, 1]
  const expected = [0, 1, 2, 3, 4]
  const result = unshift(array, ...items)
  assertEquals(result, expected)
})

Deno.test("unshift: returns null if array is not an array", () => {
  const array: any = "not an array"
  const items = [1]
  const result = unshift(array, ...items)
  assertEquals(result, null)
})

Deno.test("append: inserts items at the end of the array", () => {
  const array = [1, 2, 3]
  const items = [4, 5]
  const expected = [1, 2, 3, 4, 5]
  const result = append(array, ...items)
  assertEquals(result, expected)
})

Deno.test("append: returns null if array is not an array", () => {
  const array: any = "not an array"
  const items = [1]
  const result = append(array, ...items)
  assertEquals(result, null)
})
