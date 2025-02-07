import { assertEquals } from "@std/assert"
import { LinkedList } from "./linked-list.ts"

Deno.test("LinkedList prepend", () => {
  const list = new LinkedList<number>()
  list.prepend(1, 2, 3)
  assertEquals(list.size(), 3)
  assertEquals(list.get(0), 1)
  assertEquals(list.get(1), 2)
  assertEquals(list.get(2), 3)
})

Deno.test("LinkedList append", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  assertEquals(list.size(), 3)
  assertEquals(list.get(0), 1)
  assertEquals(list.get(1), 2)
  assertEquals(list.get(2), 3)
})

Deno.test("LinkedList insert", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  list.insert(1, 4, 5)
  assertEquals(list.size(), 5)
  assertEquals(list.get(0), 1)
  assertEquals(list.get(1), 4)
  assertEquals(list.get(2), 5)
  assertEquals(list.get(3), 2)
  assertEquals(list.get(4), 3)
})

Deno.test("LinkedList get", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  assertEquals(list.get(0), 1)
  assertEquals(list.get(1), 2)
  assertEquals(list.get(2), 3)
})

Deno.test("LinkedList set", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  list.set(1, 4)
  assertEquals(list.get(0), 1)
  assertEquals(list.get(1), 4)
  assertEquals(list.get(2), 3)
})

Deno.test("LinkedList indexOf", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  assertEquals(list.indexOf(2), 1)
  assertEquals(list.indexOf(4), null)
})

Deno.test("LinkedList clear", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  list.clear()
  assertEquals(list.size(), 0)
})

Deno.test("LinkedList delete", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  list.delete(1)
  assertEquals(list.size(), 2)
  assertEquals(list.get(0), 1)
  assertEquals(list.get(1), 3)
})

Deno.test("LinkedList size", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  assertEquals(list.size(), 3)
})

Deno.test("LinkedList iterator", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3)
  const iterator = list[Symbol.iterator]()
  assertEquals(iterator.next().value, 1)
  assertEquals(iterator.next().value, 2)
  assertEquals(iterator.next().value, 3)
  assertEquals(iterator.next().done, true)
})

Deno.test("LinkedList merge", () => {
  const list1 = new LinkedList<number>()
  list1.append(1, 2)
  const list2 = new LinkedList<number>()
  list2.append(3, 4)
  const mergedList = LinkedList.merge(list1, list2)
  assertEquals(mergedList.size(), 4)
  assertEquals(mergedList.get(0), 1)
  assertEquals(mergedList.get(1), 2)
  assertEquals(mergedList.get(2), 3)
  assertEquals(mergedList.get(3), 4)
})

Deno.test("LinkedList filter", () => {
  const list = new LinkedList<number>()
  list.append(1, 2, 3, 4, 5)
  const filteredList = LinkedList.filter(list, value => value % 2 === 0)
  assertEquals(filteredList.size(), 2)
  assertEquals(filteredList.get(0), 2)
  assertEquals(filteredList.get(1), 4)
})
