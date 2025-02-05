// @ts-nocheck intenionally

import { assertEquals } from "@std/assert"
import { insert } from "./insert.ts"

function test_insert() {
  // Test case 1: Insert elements in the middle of the array
  const array1 = [1, 2, 3, 4],
    index1 = 2,
    items1 = [5, 6]
  assertEquals(insert(array1, index1, ...items1), [1, 2, 5, 6, 3, 4], "Test case 1 failed")

  // Test case 2: Insert elements at the beginning of the array
  const array2 = [1, 2, 3, 4],
    index2 = 0,
    items2 = [5, 6]
  assertEquals(insert(array2, index2, ...items2), [5, 6, 1, 2, 3, 4], "Test case 2 failed")

  // Test case 3: Insert elements at the end of the array
  const array3 = [1, 2, 3, 4],
    index3 = 4,
    items3 = [5, 6]
  assertEquals(insert(array3, index3, ...items3), [1, 2, 3, 4, 5, 6], "Test case 3 failed")

  // Test case 4: Insert an empty array
  const array4 = [1, 2, 3, 4],
    index4 = 2,
    items4 = []
  assertEquals(insert(array4, index4, ...items4), [1, 2, 3, 4], "Test case 4 failed")

  // Test case 5: Insert with a negative index
  const array5 = [1, 2, 3, 4],
    index5 = -1,
    items5 = [5, 6]
  assertEquals(insert(array5, index5, ...items5), [1, 2, 3, 5, 6, 4], "Test case 5 failed")

  // Test case 6: Insert with an index greater than the array length
  const array6 = [1, 2, 3, 4],
    index6 = 10,
    items6 = [5, 6]
  assertEquals(insert(array6, index6, ...items6), [1, 2, 3, 4, 5, 6], "Test case 6 failed")

  // Test case 7: Insert with a non-numeric index
  const array7 = [1, 2, 3, 4],
    index7 = "a",
    items7 = [5, 6]
  assertEquals(insert(array7, index7, ...items7), [5, 6, 1, 2, 3, 4], "Test case 7 failed")

  // Test case 8: Insert into an empty array
  const array8 = [],
    index8 = 0,
    items8 = [5, 6]
  assertEquals(insert(array8, index8, ...items8), [5, 6], "Test case 8 failed")
}

Deno.test("insert", test_insert)
