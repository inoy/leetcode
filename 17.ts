// noinspection SpellCheckingInspection

export {}

const digitsMap: { [key: number]: string } = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const ans: string[] = []

  const combination = (i: number, s: string): void => {
    console.log({i, s, ans})
    if (i === digits.length) {
      ans.push(s)
      return
    }

    for (const c of digitsMap[Number(digits[i])]) {
      combination(i + 1, s + c)
    }
  }

  combination(0, '')
  return ans
}

console.log(letterCombinations('23'))
