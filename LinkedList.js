export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  append(value) {
    const newNode = new Node(value);

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
      this.#size++;
      return;
    }

    this.#tail.nextNode = newNode;
    this.#tail = newNode;
    this.#size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.#tail) {
      this.#tail = newNode;
    }

    newNode.nextNode = this.#head;
    this.#head = newNode;
    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    if (!this.#head) {
      return;
    }

    return this.#head.value;
  }

  tail() {
    if (!this.#tail) {
      return;
    }

    return this.#tail.value;
  }

  at(index) {
    if (index > this.#size - 1 || !this.#head) {
      return;
    }

    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current.value;
  }

  pop() {
    if (!this.#head) {
      return undefined;
    }

    const value = this.#head.value;
    this.#head = this.#head.nextNode;
    this.#size--;

    if (!this.#head) {
      this.#tail = null;
    }
    return value;
  }

  contains(value) {
    if (!this.#head) {
      return false;
    }

    let current = this.#head;
    for (let i = 0; i < this.#size; i++) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    if (!this.#head) {
      return -1;
    }

    let current = this.#head;
    for (let i = 0; i < this.#size; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.nextNode;
    }
    return -1;
  }

  toString() {
    let string = "";

    let current = this.#head;
    while (current !== null) {
      string += `(${current.value}) -> `;
      current = current.nextNode;
    }

    if (this.#head) {
      string += `null`;
    }
    return string;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.#size) {
      throw RangeError("Index out of range");
    }

    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    values.forEach((value) => {
      const node = new Node(value, current.nextNode);
      current.nextNode = node;
      current = node;
      this.#size++;
    });
  }
}
