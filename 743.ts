export {}

// undone

function networkDelayTime(times: number[][], N: number, K: number): number {
  const tt = new Array(N + 1).fill(Infinity)
  tt[0] = 0
  tt[K] = 0

  let flag = true

  while (flag) {
    flag = false
    times.forEach(([u, v, w]) => {
      if (tt[u] !== Infinity && tt[v] > tt[u] + w) {
        tt[v] = tt[u] + w
        flag = true
      }
    })
  }

  const res = Math.max(...tt)

  return res === Infinity ? -1 : res
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
