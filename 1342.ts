export {}

const _numberOfSteps = (num: number, step: number): number => {
  if (num === 0) return step
  const half = num / 2
  if (Number.isInteger(half)) return _numberOfSteps(half, ++step)
  return _numberOfSteps(--num, ++step)
}

function numberOfSteps(num: number): number {
  return _numberOfSteps(num, 0)
}

console.log(numberOfSteps(14))
