function romanToInt(s: string): number {
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    const t = s.charAt(i)
    if (t === 'I') {
      if (s.charAt(i + 1) === 'V') {
        ans += 4
        i++
      } else if (s.charAt(i + 1) === 'X') {
        ans += 9
        i++
      } else {
        ans += 1
      }
    } else if (t === 'V') {
      ans += 5
    } else if (t === 'X') {
      if (s.charAt(i + 1) === 'L') {
        ans += 40
        i++
      } else if (s.charAt(i + 1) === 'C') {
        ans += 90
        i++
      } else {
        ans += 10
      }
    } else if (t === 'L') {
      ans += 50
    } else if (t === 'C') {
      if (s.charAt(i + 1) === 'D') {
        ans += 400
        i++
      } else if (s.charAt(i + 1) === 'M') {
        ans += 900
        i++
      } else {
        ans += 100
      }
    } else if (t === 'D') {
      ans += 500
    } else if (t === 'M') {
      ans += 1000
    }
    console.log(ans)
  }
  return ans
}

console.log(romanToInt('MCDLXXVI'))
