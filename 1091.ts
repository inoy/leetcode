export {}

// undone
// いったん諦める...

type cell = [number, number]

// @ts-ignore
function shortestPathBinaryMatrix(grid: number[][]): number | undefined {
  const n = grid.length - 1
  if (grid[0][0] === 1 || grid[n][n] === 1) return -1

  const connected0Cells = (cell: cell): cell[] => {
    const r: cell[] = []
    const ab = [-1, 0, 1]
    ab.forEach(a => {
      ab.forEach(b => {
        if (a !== 0 || b !== 0) {
          const na = cell[0] + a
          const nb = cell[1] + b
          if ((0 <= na && na < n) && (0 <= nb && nb < n)) {
            if (grid[na][nb] === 0) r.push([na, nb])
          }
        }
      })
    })

    return r
  }

  const queue: cell[] = [[0, 0]]
  const visited = new Set<cell>()
  const pathLen: { [key: string]: number } = {}
  while (queue) {
    const cell = queue.pop()
    if (cell === undefined || visited.has(cell)) continue
    if (cell[0] === n && cell[1] === n) {
      return pathLen[JSON.stringify(cell)]!
    }
    visited.add(cell)
    for (const connected0Cell of connected0Cells(cell)) {
      if (pathLen[JSON.stringify(connected0Cell)] === undefined)
        pathLen[JSON.stringify(connected0Cell)] = pathLen[JSON.stringify(cell)] + 1
      queue.push(connected0Cell)
    }

    return -1
  }
}

// console.log(shortestPathBinaryMatrix([[0, 1], [1, 0]]))
// console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]))
// console.log(shortestPathBinaryMatrix([[1, 0, 0], [1, 1, 0], [1, 1, 0]]))
// console.log(shortestPathBinaryMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.log(shortestPathBinaryMatrix([[0, 1, 1, 0, 0, 0], [0, 1, 0, 1, 1, 0], [0, 1, 1, 0, 1, 0], [0, 0, 0, 1, 1, 0], [1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 0]]))
