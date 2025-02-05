import { assertEquals } from "@std/assert"
import { insert } from "./insert.ts"

function test_insert() {
  let caseId = 0
  function test_case(
    array: number[],
    index: number | string,
    items: number[],
    expected: number[] | null
  ) {
    caseId++
    assertEquals(insert(array, index as number, ...items), expected, `Test case ${caseId} failed`)
  }

  // Test case 1: Insert elements in the middle of the array
  test_case([1, 2, 3, 4], 2, [5, 6], [1, 2, 5, 6, 3, 4])

  // Test case 2: Insert elements at the beginning of the array
  test_case([1, 2, 3, 4], 0, [5, 6], [5, 6, 1, 2, 3, 4])

  // Test case 3: Insert elements at the end of the array
  test_case([1, 2, 3, 4], 4, [5, 6], [1, 2, 3, 4, 5, 6])

  // Test case 4: Insert an empty array
  test_case([1, 2, 3, 4], 2, [], [1, 2, 3, 4])

  // Test case 5: Insert with a negative index
  test_case([1, 2, 3, 4], -1, [5, 6], [1, 2, 3, 5, 6, 4])

  // Test case 6: Insert with an index greater than the array length
  test_case([1, 2, 3, 4], 10, [5, 6], [1, 2, 3, 4, 5, 6])

  // Test case 7: Insert with a non-numeric index
  test_case([1, 2, 3, 4], "a", [5, 6], null)

  // Test case 8: Insert into an empty array
  test_case([], 0, [5, 6], [5, 6])
}

Deno.test("insert", test_insert)
