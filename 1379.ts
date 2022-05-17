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

// noinspection JSUnusedLocalSymbols
function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
  if (original === null || cloned === null) return null
  if (original === target) return cloned
  return getTargetCopy(original.left, cloned.left, target)
    || getTargetCopy(original.right, cloned.right, target)
}
