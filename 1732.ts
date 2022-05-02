export {}

function largestAltitude(gain: number[]): number {
  const altitudes: number[] = [0]
  let index: number = 0

  const g = [0, ...gain]
  g.reduce((previousValue, currentValue) => {
    const altitude: number = previousValue + currentValue
    altitudes[++index] = altitude
    return altitude
  })
  // console.log(altitudes)
  return altitudes.sort((a, b) => {
    if (a > b) return -1
    return 1
  })[0]
}

console.log(largestAltitude([-5, 1, 5, 0, -7]))
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]))
