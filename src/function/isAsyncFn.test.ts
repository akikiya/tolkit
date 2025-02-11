// deno-lint-ignore-file require-await

import { assert, assertFalse } from "@std/assert"
import { isAsyncFn } from "./isAsyncFn.ts"

Deno.test("isAsyncFn: should return true for async functions", () => {
  async function asyncFunction() {
    return "I am async"
  }
  const arrowAsyncFunction = async () => {
    return "I am async arrow"
  }
  assert(isAsyncFn(asyncFunction), "asyncFunction should be identified as an async function")
  assert(
    isAsyncFn(arrowAsyncFunction),
    "arrowAsyncFunction should be identified as an async function"
  )
})

Deno.test("isAsyncFn: should return false for sync functions", () => {
  function syncFunction() {
    return "I am sync"
  }
  const arrowSyncFunction = () => {
    return "I am sync arrow"
  }
  assertFalse(isAsyncFn(syncFunction), "syncFunction should not be identified as an async function")
  assertFalse(
    isAsyncFn(arrowSyncFunction),
    "arrowSyncFunction should not be identified as an async function"
  )
})

Deno.test("isAsyncFn: should return false for non-function values", () => {
  const numberValue = 42
  const stringValue = "Hello, Deno!"
  const objectValue = { key: "value" }
  const arrayValue = [1, 2, 3]
  const nullValue = null
  const undefinedValue = undefined

  assertFalse(isAsyncFn(numberValue), "numberValue should not be identified as an async function")
  assertFalse(isAsyncFn(stringValue), "stringValue should not be identified as an async function")
  assertFalse(isAsyncFn(objectValue), "objectValue should not be identified as an async function")
  assertFalse(isAsyncFn(arrayValue), "arrayValue should not be identified as an async function")
  assertFalse(isAsyncFn(nullValue), "nullValue should not be identified as an async function")
  assertFalse(
    isAsyncFn(undefinedValue),
    "undefinedValue should not be identified as an async function"
  )
})

Deno.test("isAsyncFn: should handle bound functions correctly", () => {
  const obj = {
    async boundAsyncFunction() {
      return "I am a bound async function"
    },
  }
  assert(
    isAsyncFn(obj.boundAsyncFunction),
    "boundAsyncFunction should be identified as an async function"
  )
})

Deno.test("isAsyncFn: should handle class methods correctly", () => {
  class MyClass {
    async asyncMethod() {
      return "I am an async method"
    }
    syncMethod() {
      return "I am a sync method"
    }
  }
  const instance = new MyClass()

  assert(isAsyncFn(instance.asyncMethod), "asyncMethod should be identified as an async function")
  assertFalse(
    isAsyncFn(instance.syncMethod),
    "syncMethod should not be identified as an async function"
  )
})
