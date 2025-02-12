import { assertEquals, assertThrows } from "@std/assert"
import { LinkedList } from "./linked-list.ts"

Deno.test("LinkedList prepend method", () => {
  const list = new LinkedList<number>()
  list.prepend(3, 2, 1)
  assertEquals(list.size(), 3)
  assertEquals(list.get(0), 3)
  assertEquals(list.get(1), 2)
  assertEquals(list.get(2), 1)
})

Deno.test("LinkedList append method", () => {
  const list = new LinkedList<string>()
  list.append("a", "b", "c")
  assertEquals(list.size(), 3)
  assertEquals(list.get(0), "a")
  assertEquals(list.get(1), "b")
  assertEquals(list.get(2), "c")
})

Deno.test("LinkedList insert method", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 4, 5)
  list.insert(2, 3)
  assertEquals(list.size(), 5)
  assertEquals(list.get(2), 3)
  assertEquals(list.toArray(), [1, 2, 3, 4, 5])

  list.insert(0, 0)
  assertEquals(list.get(0), 0)
  assertEquals(list.size(), 6)

  list.insert(6, 6)
  assertEquals(list.get(6), 6)
  assertEquals(list.size(), 7)

  assertThrows(() => list.insert(8, 8), RangeError)
})

Deno.test("LinkedList get method", () => {
  const list = new LinkedList<number>()
  list.append(10, 20, 30)
  assertEquals(list.get(0), 10)
  assertEquals(list.get(1), 20)
  assertEquals(list.get(2), 30)
  assertThrows(() => list.get(3), RangeError)
})

Deno.test("LinkedList set method", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  list.set(1, 20)
  assertEquals(list.get(1), 20)
  assertThrows(() => list.set(3, 0), RangeError)
})

Deno.test("LinkedList indexOf method", () => {
  const list = new LinkedList<number>()
  list.append(5, 10, 15, 20)
  assertEquals(list.indexOf(10), 1)
  assertEquals(list.indexOf(20), 3)
  assertEquals(list.indexOf(25), null)
})

Deno.test("LinkedList delete method", () => {
  const list = new LinkedList<string>()
  list.append("a", "b", "c", "d", "e")
  list.delete(2)
  assertEquals(list.size(), 4)
  assertEquals(list.get(2), "d")
  assertThrows(() => list.delete(4), RangeError)

  list.delete(0)
  assertEquals(list.get(0), "b")
  assertEquals(list.size(), 3)

  list.delete(2)
  assertEquals(list.size(), 2)
  assertEquals(list.get(1), "d")
})

Deno.test("LinkedList clear method", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  list.clear()
  assertEquals(list.size(), 0)
})

Deno.test("LinkedList merge static method", () => {
  const list1 = new LinkedList<number>()
  list1.append(1, 2, 3)
  const list2 = new LinkedList<number>()
  list2.append(4, 5, 6)
  const mergedList = LinkedList.merge(list1, list2)
  assertEquals(mergedList.size(), 6)
  assertEquals(mergedList.toArray(), [1, 2, 3, 4, 5, 6])
})

Deno.test("LinkedList filter static method", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3, 4, 5, 6)
  const filteredList = LinkedList.filter(list, value => value % 2 === 0)
  assertEquals(filteredList.size(), 3)
  assertEquals(filteredList.toArray(), [2, 4, 6])
})

Deno.test("LinkedList iterator", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3, 4, 5)
  const values: number[] = []
  for (const value of list) {
    values.push(value)
  }
  assertEquals(values, [1, 2, 3, 4, 5])
})

Deno.test("LinkedList toArray method", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  assertEquals(list.toArray(), [1, 2, 3])
})
