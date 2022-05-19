export {}

// undone
function longestIncreasingPath(matrix: number[][]): number {
  const m = matrix[0].length
  const n = matrix.length

  const cache: number[][] = []

  for (let i = 0; i < n; i++) {
    cache.push([])
  }

  function move(x: number, y: number, prev?: number): number {
    if (x < 0 || y < 0 || y >= n || x >= m) {
      return 0
    }

    const val = matrix[y][x]

    if (prev !== undefined && val <= prev) {
      return 0
    }

    if (cache[y][x] !== undefined) {
      return cache[y][x]
    }

    const dist = Math.max(
      move(x + 1, y, val),
      move(x - 1, y, val),
      move(x, y + 1, val),
      move(x, y - 1, val),
    )

    return cache[y][x] = dist + 1
  }

  let max = 0

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      max = Math.max(move(x, y, undefined), max)
    }
  }

  return max
}

console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]))
