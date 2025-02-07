import { assertEquals } from "@std/assert"
import { ArrayStack, ObjectStack } from "./stack.ts"

Deno.test("ArrayStack push", () => {
  const stack = new ArrayStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.size(), 3)
  assertEquals(stack.peek(), 3)
})

Deno.test("ArrayStack pop", () => {
  const stack = new ArrayStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.pop(), 3)
  assertEquals(stack.size(), 2)
  assertEquals(stack.peek(), 2)
})

Deno.test("ArrayStack peek", () => {
  const stack = new ArrayStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.peek(), 3)
})

Deno.test("ArrayStack clear", () => {
  const stack = new ArrayStack<number>()
  stack.push(1, 2, 3)
  stack.clear()
  assertEquals(stack.size(), 0)
})

Deno.test("ArrayStack toArray", () => {
  const stack = new ArrayStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.toArray(), [1, 2, 3])
})

Deno.test("ArrayStack isEmpty", () => {
  const stack = new ArrayStack<number>()
  assertEquals(stack.isEmpty(), true)
  stack.push(1)
  assertEquals(stack.isEmpty(), false)
})

Deno.test("ObjectStack push", () => {
  const stack = new ObjectStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.size(), 3)
  assertEquals(stack.peek(), 3)
})

Deno.test("ObjectStack pop", () => {
  const stack = new ObjectStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.pop(), 3)
  assertEquals(stack.size(), 2)
  assertEquals(stack.peek(), 2)
})

Deno.test("ObjectStack peek", () => {
  const stack = new ObjectStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.peek(), 3)
})

Deno.test("ObjectStack clear", () => {
  const stack = new ObjectStack<number>()
  stack.push(1, 2, 3)
  stack.clear()
  assertEquals(stack.size(), 0)
})

Deno.test("ObjectStack toArray", () => {
  const stack = new ObjectStack<number>()
  stack.push(1, 2, 3)
  assertEquals(stack.toArray(), [1, 2, 3])
})

Deno.test("ObjectStack isEmpty", () => {
  const stack = new ObjectStack<number>()
  assertEquals(stack.isEmpty(), true)
  stack.push(1)
  assertEquals(stack.isEmpty(), false)
})
