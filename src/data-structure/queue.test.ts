import { assertEquals, assertThrows } from "@std/assert"
import { LinkedListQueue } from "./queue.ts"

Deno.test("LinkedListQueue size method", () => {
  const queue = new LinkedListQueue<number>()
  assertEquals(queue.size(), 0)
  queue.enqueue(1, 2, 3)
  assertEquals(queue.size(), 3)
  queue.dequeue()
  assertEquals(queue.size(), 2)
  queue.clear()
  assertEquals(queue.size(), 0)
})

Deno.test("LinkedListQueue isEmpty method", () => {
  const queue = new LinkedListQueue<string>()
  assertEquals(queue.isEmpty(), true)
  queue.enqueue("a")
  assertEquals(queue.isEmpty(), false)
  queue.dequeue()
  assertEquals(queue.isEmpty(), true)
})

Deno.test("LinkedListQueue enqueue method", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.toArray(), [1, 2, 3])
  queue.enqueue(4, 5)
  assertEquals(queue.toArray(), [1, 2, 3, 4, 5])
})

Deno.test("LinkedListQueue dequeue method", () => {
  const queue = new LinkedListQueue<string>()
  queue.enqueue("a", "b", "c")
  assertEquals(queue.dequeue(), "a")
  assertEquals(queue.dequeue(), "b")
  assertEquals(queue.dequeue(), "c")
  assertEquals(queue.dequeue(), undefined)
  assertEquals(queue.isEmpty(), true)
})

Deno.test("LinkedListQueue front method", () => {
  const queue = new LinkedListQueue<number>()
  assertThrows(() => queue.front(), RangeError)
  queue.enqueue(10, 20, 30)
  assertEquals(queue.front(), 10)
  queue.dequeue()
  assertEquals(queue.front(), 20)
  queue.clear()
  assertThrows(() => queue.front(), RangeError)
})

Deno.test("LinkedListQueue back method", () => {
  const queue = new LinkedListQueue<string>()
  assertThrows(() => queue.back(), RangeError)
  queue.enqueue("x", "y", "z")
  assertEquals(queue.back(), "z")
  queue.enqueue("w")
  assertEquals(queue.back(), "w")
  queue.dequeue()
  assertEquals(queue.back(), "w")
  queue.clear()
  assertThrows(() => queue.back(), RangeError)
})

Deno.test("LinkedListQueue clear method", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  queue.clear()
  assertEquals(queue.isEmpty(), true)
  assertEquals(queue.size(), 0)
  assertEquals(queue.toArray(), [])
})

Deno.test("LinkedListQueue toArray method", () => {
  const queue = new LinkedListQueue<number>()
  assertEquals(queue.toArray(), [])
  queue.enqueue(5, 10, 15)
  assertEquals(queue.toArray(), [5, 10, 15])
  queue.dequeue()
  assertEquals(queue.toArray(), [10, 15])
  queue.enqueue(20)
  assertEquals(queue.toArray(), [10, 15, 20])
})

Deno.test("LinkedListQueue dequeue from empty queue", () => {
  const queue = new LinkedListQueue<number>()
  assertEquals(queue.dequeue(), undefined)
})

Deno.test("LinkedListQueue enqueue multiple elements", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3, 4, 5)
  assertEquals(queue.toArray(), [1, 2, 3, 4, 5])
})

Deno.test("LinkedListQueue dequeue and enqueue", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.dequeue(), 1)
  assertEquals(queue.toArray(), [2, 3])
  queue.enqueue(4, 5)
  assertEquals(queue.toArray(), [2, 3, 4, 5])
  assertEquals(queue.dequeue(), 2)
  assertEquals(queue.toArray(), [3, 4, 5])
})
