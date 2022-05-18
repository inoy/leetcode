export {}

// undone
function criticalConnections(n: number, connections: number[][]): number[][] {
  // build graph
  const graph = new Map<number, number[]>() // node -> neighbors[]
  connections.forEach((connection) => {
    const [u, v] = connection
    graph.has(u) ? graph.get(u)!.push(v) : graph.set(u, [v])
    graph.has(v) ? graph.get(v)!.push(u) : graph.set(v, [u])
  })

  // dfs from node 0
  const res = [] as number[][]
  const depthMap = new Map<number, number>()  // node -> depth
  depthMap.set(0, 0)
  dfs(0, -1, depthMap, 0, graph, res)
  return res
}

function dfs(node: number, parent: number, depthMap: Map<number, number>, depth: number, graph: Map<number, number[]>, res: number[][]): number {
  graph.get(node)!.forEach((neighbor) => {
    if (neighbor === parent) {
      return
    }
    if (depthMap.has(neighbor)) {
      depthMap.set(node, Math.min(depthMap.get(node)!, depthMap.get(neighbor)!))
    } else {
      depthMap.set(neighbor, depth + 1)
      depthMap.set(node, Math.min(depthMap.get(node)!, dfs(neighbor, node, depthMap, depth + 1, graph, res)))
    }
  })
  // check if (parent, node) edge consists of a circle
  if (node !== 0 && depthMap.get(node) === depth) {
    res.push([parent, node])
  }
  return depthMap.get(node)!
}

console.log(criticalConnections(4, [[0, 1], [1, 2], [2, 0], [1, 3]]))