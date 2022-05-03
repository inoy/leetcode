export {}

const backspace = (s: string): string => {
  const a = s.split('')
  for (let i = 0; i < a.length; ++i) {
    // console.log(`AAA i = ${i}, a = ${a}`)
    if (a[i] === '#') {
      // console.log(`BBB = ${i}, a = ${a}`)
      if (i === 0) {
        a.splice(i, 1)
      } else {
        a.splice(i - 1, 2)
      }
      // console.log(`CCC = ${i}, a = ${a}`)
      i -= 2
    }
    // console.log(`DDD = ${i}, a = ${a}`)
  }
  // console.log(a)
  return a.toString()
}

function backspaceCompare(s: string, t: string): boolean {
  return backspace(s) === backspace(t)
}

// console.log(backspaceCompare('ab#c', 'ad#c'))
// console.log(backspaceCompare('ab##', 'c#d#'))
// console.log(backspaceCompare('a#c', 'b'))
console.log(backspaceCompare('y#fo##f', 'y#f#o##f'))