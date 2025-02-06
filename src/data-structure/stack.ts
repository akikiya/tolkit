export interface Stack<T> {
  /**
   * Returns the number of elements in the stack.
   * @returns {number} The number of elements in the stack.
   */
  size(): number
  /**
   * Returns true if the stack is empty, false otherwise.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean
  /**
   * Adds an element to the top of the stack.
   * @param {T} element The element to add to the stack.
   */
  push(element: T): void
  /**
   * Removes and returns the element at the top of the stack.
   * @returns {T | void} The element at the top of the stack, or undefined if the stack is empty.
   */
  pop(): T | void
  /**
   * Returns the element at the top of the stack without removing it.
   * @returns {T | void} The element at the top of the stack, or undefined if the stack is empty.
   */
  peek(): T | void
  /**
   * Removes all elements from the stack.
   */
  clear(): void
  /**
   * Returns an array containing all elements in the stack.
   * @returns {T[]} An array containing all elements in the stack.
   */
  toArray(): T[]
}

/**
 * An implementation of a stack using an array.
 * @since 0.2.0
 */
export class ArrayStack<T> implements Stack<T> {
  #elements: T[] = []

  size(): number {
    return this.#elements.length
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  push(element: T): void {
    this.#elements.push(element)
  }
  pop(): T | void {
    return this.#elements.pop()
  }
  peek(): T | void {
    return this.#elements[this.size() - 1]
  }
  clear(): void {
    this.#elements = []
  }
  toArray(): T[] {
    return this.#elements.slice()
  }
}

/**
 * An implementation of a stack using an object.
 * @since 0.2.0
 */
export class ObjectStack<T> implements Stack<T> {
  #elements: Record<number, T> = {}
  #count: number = 0
  size(): number {
    return this.#count
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  push(element: T): void {
    this.#elements[this.#count++] = element
  }
  pop(): T | void {
    if (this.isEmpty()) return
    const element = this.#elements[--this.#count]
    delete this.#elements[this.#count]
    return element
  }
  peek(): T | void {
    return this.#elements[this.size() - 1]
  }
  clear(): void {
    this.#elements = {}
    this.#count = 0
  }
  toArray(): T[] {
    return Array.from(Object.assign({}, this.#elements, { length: this.#count }))
  }
}
