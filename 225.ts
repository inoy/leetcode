class MyStack {
  constructor(
    public x: number[] = []
  ) {
  }

  push(x: number): void {
    this.x.push(x)
  }

  pop(): number {
    return this.x.pop()
  }

  top(): number {
    return this.x[this.x.length - 1]
  }

  empty(): boolean {
    return this.x.length === 0
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
