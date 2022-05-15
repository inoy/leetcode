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
  if (root === null) return 0

  let deepestLevel = -1
  let ret = 0
  const d = (level: number, node: TreeNode | null): void => {
    if (node === null) return

    d(level + 1, node.left)
    d(level + 1, node.right)

    if (level > deepestLevel) {
      deepestLevel = level
      ret = 0
    }
    if (deepestLevel === level) ret += node.val
  }

  d(0, root)
  return ret
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

