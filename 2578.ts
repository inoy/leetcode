function splitNum(num: number): number {
  const arr = Array.from(String(num)).sort();

  let [num1, num2] = ["", ""];
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? (num1 += arr[i]) : (num2 += arr[i]);
  }
  return Number(num1) + Number(num2);
}

console.log(splitNum(4325));
console.log(splitNum(687));
