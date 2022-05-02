export {}

function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    const n = ransomNote[i]
    // console.log(`n = ${n}`)
    // console.log(`magazine = ${magazine}`)

    const a = magazine.indexOf(n)
    // console.log(`a = ${a}`)
    if (a === -1) return false
    magazine = magazine.slice(0, a) + magazine.slice(a + 1)
  }
  return true
}

console.log(canConstruct('aa', 'aab'))
