function kWeakestRows(mat: number[][], k: number): number[] {
  let counts: { index: number, count: number }[] = []
  mat.forEach((elem, index) => {
    // console.log(`elem=${elem}, index=${index}`)
    let count = 0
    for (; count < elem.length; count++) {
      if (elem[count] !== 1) break
    }
    counts.push({index, count})
  })
  // console.log(counts)
  const ans = counts.sort((a, b) => {
    if (b.count > a.count) return -1
    return 1
  }).map(count => count.index)
  // console.log(counts)
  return ans.slice(0, k)
}

console.log(kWeakestRows(
  [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]],
  3)
)
