function decode(encoded: number[], first: number): number[] {
  const arr: number[] = [first];
  for (let i = 0; i < encoded.length; i++) {
    arr.push(arr[i] ^ encoded[i]);
  }
  return arr;
}

console.log(decode([1, 2, 3], 1));
