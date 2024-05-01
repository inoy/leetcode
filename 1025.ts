import * as assert from "assert";

function divisorGame(n: number): boolean {
  return n % 2 === 0;
}

assert.deepEqual(divisorGame(2), true);
assert.deepEqual(divisorGame(3), false);
