import { assertEquals } from "@std/assert"
import { intersection, difference } from "./intersection-and-difference.ts"

function test_intersection() {
  let caseId = 0
  function test_case(array1: unknown, array2: unknown, expected: unknown[] | null) {
    assertEquals(
      JSON.stringify(intersection(array1 as unknown[], array2 as unknown[])),
      JSON.stringify(expected),
      "Test case " + ++caseId + " failed"
    )
  }

  // Test case 1: Two arrays have intersection
  test_case([1, 2, 3, 4, 5], [4, 5, 6, 7, 8], [4, 5])

  // Test case 2: Two arrays have no intersection
  test_case([1, 2, 3], [4, 5, 6], [])

  // Test case 3: One array is empty
  test_case([], [1, 2, 3], [])

  // Test case 4: Both arrays are empty
  test_case([], [], [])

  // Test case 5: Two arrays contain the same elements
  test_case([1, 2, 3], [1, 2, 3], [1, 2, 3])

  // Test case 6: Two arrays contain duplicate elements
  test_case([1, 2, 2, 3, 3, 3], [2, 2, 4, 5], [2, 2])
}

function test_difference() {
  let caseId = 0
  function test_case(array1: unknown, array2: unknown, expected: unknown[] | null) {
    assertEquals(
      JSON.stringify(difference(array1 as unknown[], array2 as unknown[])),
      JSON.stringify(expected),
      "Test case " + ++caseId + " failed"
    )
  }

  // Test case 1: Two arrays have intersection
  test_case([1, 2, 3, 4, 5], [4, 5, 6, 7, 8], [1, 2, 3])

  // Test case 2: Two arrays have no intersection
  test_case([1, 2, 3], [4, 5, 6], [1, 2, 3])

  // Test case 3: One array is empty
  test_case([], [1, 2, 3], [])

  // Test case 4: Both arrays are empty
  test_case([], [], [])

  // Test case 5: Two arrays contain the same elements
  test_case([1, 2, 3], [1, 2, 3], [])

  // Test case 6: Two arrays contain duplicate elements
  test_case([1, 2, 2, 3, 3, 3], [2, 3, 3], [1])
}

Deno.test("intersection", test_intersection)
Deno.test("difference", test_difference)
