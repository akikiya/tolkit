// deno-lint-ignore-file no-explicit-any
import { assertEquals } from "@std/assert"
import { intersection, difference } from "./intersection-and-difference.ts"

Deno.test("intersection: returns common elements between two arrays", () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [3, 4, 5, 6, 7]
  const expected = [3, 4, 5]
  const result = intersection(array1, array2)
  assertEquals(result, expected)
})

Deno.test("intersection: returns empty array if no common elements", () => {
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]
  const expected: number[] = []
  const result = intersection(array1, array2)
  assertEquals(result, expected)
})

Deno.test("intersection: returns null if either input is not an array", () => {
  const array1: any = "not an array"
  const array2 = [1, 2, 3]
  const result = intersection(array1, array2)
  assertEquals(result, null)

  const array3 = [1, 2, 3]
  const array4: any = null
  const result2 = intersection(array3, array4)
  assertEquals(result2, null)
})

Deno.test("intersection: handles arrays with duplicate elements", () => {
  const array1 = [1, 2, 2, 3, 4]
  const array2 = [2, 2, 3, 5]
  const expected = [2, 2, 3]
  const result = intersection(array1, array2)
  assertEquals(result, expected)
})

Deno.test("difference: returns elements in array1 not in array2", () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [3, 4, 5, 6, 7]
  const expected = [1, 2]
  const result = difference(array1, array2)
  assertEquals(result, expected)
})

Deno.test("difference: returns all elements if no common elements", () => {
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]
  const expected = [1, 2, 3]
  const result = difference(array1, array2)
  assertEquals(result, expected)
})

Deno.test("difference: returns empty array if arrays are identical", () => {
  const array1 = [1, 2, 3]
  const array2 = [1, 2, 3]
  const expected: number[] = []
  const result = difference(array1, array2)
  assertEquals(result, expected)
})

Deno.test("difference: returns null if either input is not an array", () => {
  const array1: any = "not an array"
  const array2 = [1, 2, 3]
  const result = difference(array1, array2)
  assertEquals(result, null)

  const array3 = [1, 2, 3]
  const array4: any = null
  const result2 = difference(array3, array4)
  assertEquals(result2, null)
})

Deno.test("difference: handles arrays with duplicate elements", () => {
  const array1 = [1, 2, 2, 3, 4]
  const array2 = [2, 2, 3, 5]
  const expected = [1, 4]
  const result = difference(array1, array2)
  assertEquals(result, expected)
})
