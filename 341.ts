export {}

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
// noinspection JSUnusedGlobalSymbols
class NestedInteger {
  public value: number | NestedInteger[]

  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  constructor(value?: number) {
    this.value = value === undefined ? [] : value
  };

  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  isInteger(): boolean {
    return !Array.isArray(this.value)
  };

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  getInteger(): number | null {
    return Array.isArray(this.value) ? null : this.value
  };

  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {
    this.value = value
  };

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger) {
    this.value = this.isInteger()
      ? [new NestedInteger(this.getInteger() || undefined), elem]
      : [...this.getList(), elem]
  };

  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[] {
    return Array.isArray(this.value) ? this.value : []
  };
}

class NestedIterator {
  data: number[] = []

  constructor(public nestedList: NestedInteger[]) {
    this.flatten(nestedList)
  }

  private flatten(nestedList: NestedInteger[]): void {
    for (const elem of nestedList) {
      elem.isInteger()
        ? this.data.push(elem.getInteger()!)
        : this.flatten(elem.getList())
    }
  }

  hasNext(): boolean {
    return this.data.length > 0
  }

  next(): number {
    return this.data.shift()!
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */

const ex1 = new NestedInteger(1)
ex1.add(new NestedInteger(1))

const ex2 = new NestedInteger(4)
const ex2_1 = new NestedInteger(6)
ex2.add(ex2_1)


const nestedList = new NestedIterator([
  ex1,
  new NestedInteger(1),
  // new NestedInteger(2),
  // new NestedInteger(3),
  // ex1,
  ex2,
])

console.log(JSON.stringify(nestedList))

const a: number[] = []
while (nestedList.hasNext()) {
  a.push(nestedList.next())
}
console.log({a})
