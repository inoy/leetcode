export {}

function mostCommonWord(paragraph: string, banned: string[]): string {
  const counts: { [key: string]: number } = {}
  let maxCount = -1
  let val = ''
  paragraph.toLocaleLowerCase().split(/[ !?',;.]/).forEach(value => {
    if (value === '' || banned.includes(value)) return
    // console.log(value)
    if (!counts[value]) counts[value] = 0
    ++counts[value]
    if (counts[value] > maxCount) {
      maxCount = counts[value]
      val = value
    }
  })
  // console.log(counts)
  // console.log(`maxCount=${maxCount}, value=${val}`)
  return val
}

console.log(mostCommonWord(
  'Bob hit a ball, the hit BALL flew far after it was hit.',
  ['hit']
))

console.log(mostCommonWord(
  'a',
  ['']
))
