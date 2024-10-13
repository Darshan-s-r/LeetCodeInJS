function findTwoElement(arr) {
  let n = arr.length;
  let S = (n * (n + 1)) / 2;
  let S2 = (n * (n + 1) * (2 * n + 1)) / 6;

  let Sn = 0, S2n = 0;
  for (let i = 0; i < n; i++) {
    Sn += arr[i]; 
    S2n += arr[i] * arr[i]; 
  }

  // Calculate differences
  let diff = S - Sn;                
  let sumDiff = (S2 - S2n) / diff; 

  // Calculate missing and repeating
  let missing = (diff + sumDiff) / 2; 
  let repeating = sumDiff - missing;  

  return [Math.round(repeating), Math.round(missing)];
}

console.log(findTwoElement([3, 1, 2, 6, 4, 6])); 
