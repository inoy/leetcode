export {}

function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
  const distances: number[][][] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // console.log([r, c])
      const distance = Math.abs(rCenter - r) + Math.abs(cCenter - c)
      if (!distances[distance]) distances[distance] = []
      distances[distance].push([r, c])
    }
  }
  // console.log(distances)
  return distances.flat()
}

console.log(allCellsDistOrder(1, 2, 0, 0))
console.log(allCellsDistOrder(2, 2, 0, 1))
console.log(allCellsDistOrder(2, 3, 1, 2))