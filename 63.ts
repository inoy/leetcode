export {}

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0

  const dp: number[] = new Array(n).fill(0)
  dp[0] = 1
  for (const row of obstacleGrid) {
    for (let column = 0; column < n; column++) {
      if (row[column] === 1) {
        dp[column] = 0
      } else if (column > 0) {
        dp[column] += dp[column - 1]
      }
    }
  }

  return dp[n - 1]
}

// console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
// console.log(uniquePathsWithObstacles([[0, 1]]))
// console.log(uniquePathsWithObstacles([[0], [0]]))
console.log(uniquePathsWithObstacles([[0, 0]]))
