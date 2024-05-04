function answerQueries(nums: number[], queries: number[]): number[] {
  const answer: Array<number> = new Array(queries.length).fill(0);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    let currentSum = 0;
    for (let j = 0; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > queries[i]) {
        break;
      }
      answer[i]++;
    }
  }
  return answer;
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
