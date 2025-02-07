import { assertEquals } from "@std/assert"
import { LinkedListQueue } from "./queue.ts"

Deno.test("LinkedListQueue enqueue", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.size(), 3)
  assertEquals(queue.front(), 1)
  assertEquals(queue.back(), 3)
})

Deno.test("LinkedListQueue dequeue", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.dequeue(), 1)
  assertEquals(queue.size(), 2)
  assertEquals(queue.front(), 2)
})

Deno.test("LinkedListQueue front", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.front(), 1)
})

Deno.test("LinkedListQueue back", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.back(), 3)
})

Deno.test("LinkedListQueue clear", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  queue.clear()
  assertEquals(queue.size(), 0)
})

Deno.test("LinkedListQueue toArray", () => {
  const queue = new LinkedListQueue<number>()
  queue.enqueue(1, 2, 3)
  assertEquals(queue.toArray(), [1, 2, 3])
})

Deno.test("LinkedListQueue isEmpty", () => {
  const queue = new LinkedListQueue<number>()
  assertEquals(queue.isEmpty(), true)
  queue.enqueue(1)
  assertEquals(queue.isEmpty(), false)
})
