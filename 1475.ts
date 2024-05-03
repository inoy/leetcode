import assert from "assert";

function finalPrices(prices: number[]): number[] {
  const ans = prices.slice();
  const stack: number[] = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && ans[stack[stack.length - 1]] >= prices[i]) {
      ans[stack.pop()!] -= prices[i];
    }
    stack.push(i);
  }
  return ans;
}

assert.deepEqual(finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3]);
