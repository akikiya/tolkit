class Node<T> {
  value: T
  next: Node<T> | null
  constructor(value: T, next: Node<T> | null) {
    this.value = value
    this.next = next
  }
}

/**
 * An implementation of a linked list
 */
export class LinkedList<T> implements Iterable<T> {
  #head: Node<T> | null = null
  #size: number = 0

  /**
   * Creates nodes from the given values
   * @param values - Node value array
   * @param next - Next node
   * @returns Created node
   * @since 0.3.0
   */
  #createNodes(values: T[], next: Node<T> | null): Node<T> {
    return values.reduceRight((acc, cur) => new Node(cur, acc), next) as Node<T>
  }

  /**
   * Adds nodes to the head of the list
   * @param values - Node value array to be added
   * @since 0.3.0
   */
  prepend(...values: T[]): void {
    this.#head = this.#createNodes(values, this.#head)
    this.#size += values.length
  }

  /**
   * Adds nodes to the tail of the list
   * @param values - Node value array to be added
   * @since 0.3.0
   */
  append(...values: T[]): void {
    if (this.#size > 0) {
      let index = 0
      let currentNode = this.#head
      while (index < this.#size - 1) {
        index++
        currentNode = currentNode?.next ?? null
      }
      currentNode = currentNode as Node<T>
      currentNode.next = this.#createNodes(values, null)
    } else this.#head = this.#createNodes(values, null)
    this.#size += values.length
  }

  /**
   * Inserts nodes at the specified position
   * @param index - Insert position
   * @param values - Node value array to be inserted
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
   * Gets the node value at the specified position
   * @param index - Node position
   * @returns Node value
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
   * Sets the node value at the specified position
   * @param index - Node position
   * @param value - Node value
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
   * Gets the first node position of the specified value
   * @param value - Node value
   * @returns Node position
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
   * Clears the list
   * @since 0.3.0
   */
  clear(): void {
    this.#head = null
    this.#size = 0
  }

  /**
   * Deletes the node at the specified position
   * @param index - Node position
   * @since 0.3.0
   */
  delete(index: number): void {
    if (typeof index !== "number") throw new TypeError("Index must be a number")
    if (index < 0) index = this.#size + index
    if (index < 0 || index >= this.#size) throw new RangeError("Index out of bounds")
    index = Math.floor(index)
    if (index !== 0) {
      let i = 0
      let n = this.#head
      while (i < index - 1) {
        n = n?.next ?? null
        i++
      }
      n = n as Node<T>
      n.next = n.next?.next ?? null
    } else this.#head = this.#head?.next ?? null
    this.#size--
  }

  /**
   * Gets the size of the list
   * @returns List size
   * @since 0.3.0
   */
  size(): number {
    return this.#size
  }

  /**
   * Iterator
   * @returns Iterator object
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
   * Creates a new linked list from list1 and list2.
   * @param list1 - List 1
   * @param list2 - List 2
   * @returns New linked list
   * @since 0.3.0
   */
  static merge<T, U>(list1: LinkedList<T>, list2: LinkedList<U>): LinkedList<T | U> {
    const list = new LinkedList<T | U>()
    list.append(...list1, ...list2)
    return list
  }

  /**
   * Creates a new linked list of which the values meet the condition specified by the callback function
   * @param list - List
   * @param predicate - A function that accepts one or two arguments, called for each element in the list
   * @returns New linked list
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
