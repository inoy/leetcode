export {}

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const _middleNode = (head: ListNode, length: number): number => {
  const {next} = head
  if (next == null) return length
  return _middleNode(next, ++length)
}

function middleNode(head: ListNode | null): ListNode | null {
  if (head == null) return null
  let {next} = head
  if (next == null) return head
  const length = _middleNode(head, 1)
  const middle = Math.round((length - 1) / 2)
  console.log(`cnt = ${length}, middle = ${middle}`)
  for (let i = 0; i < middle - 1; i++) {
    next = next!.next
  }
  return next
}

console.log((middleNode(
  new ListNode(1, null
    // new ListNode(2,
    //   new ListNode(3,
    //     new ListNode(4,
    //       new ListNode(5,
    //         new ListNode(6,
    //           null))
    //     )
    //   )
    // )
  )
)))
