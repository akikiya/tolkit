import { assertEquals } from "@std/assert"
import { once } from "./once.ts"

Deno.test("once", () => {
  const counter = {
    count: 0,
    increment: once(() => counter.count++),
  }
  counter.increment()
  counter.increment()
  counter.increment()
  assertEquals(counter.count, 1)
})
