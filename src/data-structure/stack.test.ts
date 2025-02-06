import { assertEquals } from "@std/assert"
import { ArrayStack, ObjectStack } from "./stack.ts"
import type { Stack } from "./stack.ts"

function test_Stack(stack: Stack<number>) {
  // Test case 1: Push and pop elements
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assertEquals(stack.pop(), 3, "Test case 1 failed")

  // Test case 2: Peek at the top element
  stack.clear()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assertEquals(stack.peek(), 3, "Test case 2 failed")

  // Test case 3: Check if the stack is empty
  stack.clear()
  assertEquals(stack.isEmpty(), true, "Test case 3 failed")

  // Test case 4: Get the size of the stack
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assertEquals(stack.size(), 3, "Test case 4 failed")

  // Test case 5: Clear the stack
  stack.clear()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.clear()
  assertEquals(stack.isEmpty(), true, "Test case 5 failed")

  // Test case 6: Convert the stack to an array
  stack.clear()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assertEquals(JSON.stringify(stack.toArray()), JSON.stringify([1, 2, 3]), "Test case 6 failed")

  // Test case 7: Pop from an empty stack
  stack.clear()
  assertEquals(stack.pop(), undefined, "Test case 7 failed")

  // Test case 8: Peek at the top element of an empty stack
  stack.clear()
  assertEquals(stack.peek(), undefined, "Test case 8 failed")
}

Deno.test("ArrayStack", () => test_Stack(new ArrayStack<number>()))
Deno.test("ObjectStack", () => test_Stack(new ObjectStack<number>()))
