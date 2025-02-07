import { LinkedList } from "./linked-list.ts"

export interface Queue<T> {
  /**
   * Returns the number of elements in the queue.
   * @returns {number} The number of elements in the queue.
   */
  size(): number
  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean
  /**
   * Adds an element to the end of the queue.
   * @param {T[]} elements The elements to add to the queue.
   */
  enqueue(...elements: T[]): void
  /**
   * Removes and returns the element at the front of the queue.
   * @returns {T | void} The element at the front of the queue, or undefined if the queue is empty.
   */
  dequeue(): T | void
  /**
   * Returns the element at the front of the queue without removing it.
   * @returns {T | void} The element at the front of the queue, or undefined if the queue is empty.
   */
  front(): T | void
  /**
   * Returns the element at the end of the queue without removing it.
   * @returns {T | void} The element at the end of the queue, or undefined if the queue is empty.
   */
  back(): T | void
  /**
   * Clears the queue.
   */
  clear(): void
  /**
   * Returns an array containing all the elements in the queue.
   */
  toArray(): T[]
}

/**
 * An implementation of a queue using a linked list.
 * @since 0.4.0
 */
export class LinkedListQueue<T> implements Queue<T> {
  #list: LinkedList<T> = new LinkedList<T>()
  size(): number {
    return this.#list.size()
  }
  isEmpty(): boolean {
    return this.#list.size() === 0
  }
  enqueue(...elements: T[]): void {
    this.#list.append(...elements)
  }
  dequeue(): T | void {
    if (this.isEmpty()) return
    const el = this.#list.get(0)
    this.#list.delete(0)
    return el
  }
  front(): T | void {
    return this.#list.get(0)
  }
  back(): T | void {
    return this.#list.get(this.#list.size() - 1)
  }
  clear(): void {
    this.#list.clear()
  }
  toArray(): T[] {
    return [...this.#list]
  }
}
