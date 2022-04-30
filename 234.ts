class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const reverse = (s: string): string => {
  return s.split('').reverse().join('')
}

const _isPalindrome = (n: ListNode | null, l: string): string => {
  if (!n) return l
  const {val, next} = n
  l += val.toString()
  return _isPalindrome(next, l)
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false
  const l = _isPalindrome(head, '')
  return l === reverse(l)
}

console.log(isPalindrome(
  new ListNode(1,
    new ListNode(2,
      new ListNode(2,
        new ListNode(1)
      )
    )
  )
))
