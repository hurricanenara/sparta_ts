interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  // Queue
  private storage: T[] = [];

  constructor(private capacity = 4) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("stack is full!");
    }

    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
stringStack.push("!");
stringStack.push("!"); // 4
stringStack.push("!");

console.log(stringStack.peek());
