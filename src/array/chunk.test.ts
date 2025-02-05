import { assertEquals } from "@std/assert"
import { chunk } from "./chunk.ts"

function test_chunk() {
  // Test case 1: Normal case, array length greater than size
  test_case([1, 2, 3, 4, 5], 2, [[1, 2], [3, 4], [5]])

  // Test case 2: Normal case, array length equal to size
  test_case([1, 2, 3], 3, [[1, 2, 3]])

  // Test case 3: Normal case, array length less than size
  test_case([1, 2], 3, [[1, 2]])

  // Test case 4: Size is 1
  test_case([1, 2, 3, 4, 5], 1, [[1], [2], [3], [4], [5]])

  // Test case 5: Size is 0
  test_case([1, 2, 3, 4, 5], 0, null)

  // Test case 6: Size is negative
  test_case([1, 2, 3, 4, 5], -2, null)

  // Test case 7: Size is not an integer
  test_case([1, 2, 3, 4, 5], 2.5, null)

  // Test case 8: Input is not an array
  test_case("not an array", 2, null)

  // Test case 9: Empty array
  test_case([], 2, [])
}

function test_case(array: unknown, size: number, expected: unknown) {
  assertEquals(JSON.stringify(chunk(array as unknown[], size)), JSON.stringify(expected))
}

Deno.test("chunk", test_chunk)
