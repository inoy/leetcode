// noinspection SpellCheckingInspection

export {}

function removeDuplicates(s: string, k: number): string {
  const stack: [string, number][] = []
  for (const char of s) {
    const last = stack.at(-1)
    if (last !== undefined && last[0] === char) {
      if (++last[1] === k) stack.pop()
    } else {
      stack.push([char, 1])
    }
  }

  let ans = ''
  for (const [char, count] of stack) {
    ans += char.repeat(count)
  }
  return ans
}

console.log(removeDuplicates('abcd', 2))
console.log(removeDuplicates('deeedbbcccbdaa', 3))
console.log(removeDuplicates('pbbcggttciiippooaais', 2))
