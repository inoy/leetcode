export {}

const ruleMap: { [key: string]: number } = {
  'type': 0, 'color': 1, 'name': 2
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  return items.filter(value => value[ruleMap[ruleKey]] === ruleValue).length
}

console.log(countMatches(
  [['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'iphone']],
  'color',
  'silver'
))
console.log(countMatches(
  [['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'phone'],
    ['phone', 'gold', 'iphone']],
  'type',
  'phone'
))