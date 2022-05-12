// noinspection SpellCheckingInspection

export {}

function reverseStr(s: string, k: number): string {
  const ss = s.split('')
  for (let i = 0; i < ss.length; i += 2 * k) {
    const reverse = ss.splice(i, k).reverse()
    console.log({reverse})
    ss.splice(i, 0, ...reverse)
    console.log({ss})
  }

  return ss.join('')
}

console.log(reverseStr('abcdefg', 2))
