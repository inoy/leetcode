export {}

class MyQueue {
  constructor(
    public queue: number[] = []
  ) {
  }

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    return this.queue.shift()!
  }

  peek(): number {
    return this.queue[0]
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}

const obj = new MyQueue()
obj.push(1)
obj.push(2)
const param_2 = obj.pop()
console.log(obj)
console.log(param_2)
const param_3 = obj.peek()
console.log(obj)
console.log(param_3)
const param_4 = obj.empty()
console.log(obj)
console.log(param_4)


/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
