/**
 * Represents a node in a linked list.
 * @template T The type of value stored in the node
 */
class Node<T> {
  value: T
  next: Node<T> | null
  constructor(value: T, next: Node<T> | null) {
    this.value = value
    this.next = next
  }
}

/**
 * An implementation of a singly linked list.
 * 
 * Features:
 * - Generic type support
 * - Iterable interface implementation
 * - Array-like index access
 * - Negative index support
 * 
 * @template T The type of elements in the linked list
 */
export class LinkedList<T> implements Iterable<T> {
  #head: Node<T> | null = null
  #tail: Node<T> | null = null
  #size: number = 0
  /**
   * Creates nodes from the given values.
   * @param values - node value array
   * @param next - next node
   * @returns the created node
   * @since 0.3.0
   */
  #createNodes(values: T[], next: Node<T> | null): Node<T> {
    return values.reduceRight((acc, cur) => new Node(cur, acc), next) as Node<T>
  }
  /**
   * Adds nodes to the head of the list.
   * @param values - node value array to be added
   * @since 0.3.0
   */
  prepend(...values: T[]): void {
    if (values.length === 0) return
    const newNodes = this.#createNodes(values, this.#head)
    this.#head = newNodes
    if (this.#size === 0) {
      let current = newNodes
      while (current.next) current = current.next
      this.#tail = current
    }
    this.#size += values.length
  }
  /**
   * Adds nodes to the tail of the list.
   * @param values - node value array to be added
   * @since 0.3.0
   */
  append(...values: T[]): void {
    if (values.length === 0) return
    const newNodes = this.#createNodes(values, null)
    if (this.#size === 0) this.#head = newNodes
    else this.#tail!.next = newNodes
    let current = newNodes
    while (current.next) current = current.next
    this.#tail = current
    this.#size += values.length
  }
  /**
   * Inserts nodes at the specified position.
   * @param index - insert position
   * @param values - node value array to be inserted
   * @since 0.3.0
   */
  insert(index: number, ...values: T[]): void {
    if (typeof index !== "number") throw new TypeError("Index must be a number")
    if (index === 0) return this.prepend(...values)
    if (index === this.#size) return this.append(...values)
    if (index < 0) index = this.#size + index
    if (index < 0 || index > this.#size) throw new RangeError("Index out of bounds")
    index = Math.floor(index)
    let i = 0
    let n = this.#head
    while (i < index - 1) {
      n = n?.next ?? null
      i++
    }
    n = n as Node<T>
    n.next = this.#createNodes(values, n.next)
    this.#size += values.length
  }
  /**
   * Gets the node value at the specified position.
   * @param index - node position
   * @returns node value
   * @throws TypeError - if index is not a number
   * @throws RangeError - if index is out of bounds
   * @since 0.3.0
   */
  get(index: number): T {
    if (typeof index !== "number") throw new TypeError("Index must be a number")
    if (index < 0) index = this.#size + index
    if (index < 0 || index >= this.#size) throw new RangeError("Index out of bounds")
    index = Math.floor(index)
    let i = 0
    let n = this.#head
    while (i < index) {
      n = n?.next ?? null
      i++
    }
    return n?.value as T
  }
  /**
   * Sets the node value at the specified position.
   * @param index - node position
   * @param value - node value to be set
   * @throws TypeError - if index is not a number
   * @throws RangeError - if index is out of bounds
   * @since 0.3.0
   */
  set(index: number, value: T): void {
    if (typeof index !== "number") throw new TypeError("Index must be a number")
    if (index < 0) index = this.#size + index
    if (index < 0 || index >= this.#size) throw new RangeError("Index out of bounds")
    index = Math.floor(index)
    let i = 0
    let n = this.#head
    while (i < index) {
      n = n?.next ?? null
      i++
    }
    n = n as Node<T>
    n.value = value
  }
  /**
   * Gets the first node position of the specified value.
   * @param value - node value
   * @returns node position
   * @since 0.3.0
   */
  indexOf(value: T): number | null {
    let i = 0
    let n = this.#head
    while (i < this.#size) {
      if (n?.value === value) return i
      n = n?.next ?? null
      i++
    }
    return null
  }
  /**
   * Clears the list.
   * @since 0.3.0
   */
  clear(): void {
    this.#head = null
    this.#tail = null
    this.#size = 0
  }
  /**
   * Deletes the node at the specified position.
   * @param index - node position
   * @since 0.3.0
   */
  delete(index: number): void {
    if (typeof index !== "number") throw new TypeError("Index must be a number")
    if (index < 0) index = this.#size + index
    if (index < 0 || index >= this.#size) throw new RangeError("Index out of bounds")
    index = Math.floor(index)
    if (index === 0) {
      this.#head = this.#head?.next ?? null
      if (this.#size === 1) this.#tail = null
    } else {
      let i = 0
      let n = this.#head
      while (i < index - 1) {
        n = n?.next ?? null
        i++
      }
      n = n as Node<T>
      n.next = n.next?.next ?? null
      if (index === this.#size - 1) {
        this.#tail = n
      }
    }
    this.#size--
  }
  /**
   * Gets the size of the list.
   * @returns list size
   * @since 0.3.0
   */
  size(): number {
    return this.#size
  }
  /**
   * Iterator.
   * @returns iterator object
   * @since 0.3.0
   */
  *[Symbol.iterator](): Iterator<T> {
    let i = 0
    let n = this.#head
    while (i < this.#size) {
      yield n?.value as T
      n = n?.next ?? null
      i++
    }
  }
  /**
   * Converts the list to an array.
   * @returns the list as an array
   * @since 0.7.0
   */
  toArray(): T[] {
    return [...this]
  }
  /**
   * Creates a new linked list from list1 and list2.
   * @param list1 - list 1
   * @param list2 - list 2
   * @returns the new linked list
   * @since 0.3.0
   */
  static merge<T, U>(list1: LinkedList<T>, list2: LinkedList<U>): LinkedList<T | U> {
    const list = new LinkedList<T | U>()
    list.append(...list1, ...list2)
    return list
  }
  /**
   * Creates a new linked list of which the values meet the condition specified by the callback function.
   * @param list - the list to filter
   * @param predicate - a function that accepts up to two arguments and returns a boolean
   * @returns the new filtered linked list
   * @since 0.3.0
   */
  static filter<T>(
    list: LinkedList<T>,
    predicate: (value: T, index: number) => boolean
  ): LinkedList<T> {
    const arr = []
    let i = 0
    for (const value of list) {
      if (predicate(value, i)) arr.push(value)
      i++
    }
    const newList = new LinkedList<T>()
    newList.append(...arr)
    return newList
  }
}
