export {}

// Definition for a binary tree node.
class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {
  }
}

function deepestLeavesSum(root: TreeNode | null): number {
  console.log(root)
  if (root === null) return 0

  let deepest = -1
  let ans = 0
  const d = (level: number, left: TreeNode | null, right: TreeNode | null): void => {
    if (left !== null) {
      d(level + 1, left.left, left.right)
    }

    if (right !== null) {
      d(level + 1, right.left, right.right)
    }

    if (level > deepest) {
      deepest = level
      ans = 0
    }

    console.log({deepest, level})
    if (deepest - 1 === level) {
      console.log({leftVal: left?.val, rightVal: right?.val})
      ans += (left !== null) ? left.val : 0
      ans += (right !== null) ? right.val : 0
    }
  }
  d(1, root.left, root.right)
  return ans
}

const seven = new TreeNode(7)
const four = new TreeNode(4, seven)
const five = new TreeNode(5)
const two = new TreeNode(2, four, five)

const eight = new TreeNode(8)
const six = new TreeNode(6, null, eight)
const three = new TreeNode(3, null, six)

const one = new TreeNode(1, two, three)


console.log(deepestLeavesSum(one))

