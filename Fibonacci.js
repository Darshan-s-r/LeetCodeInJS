function fib1(n){
  const arr = new Array(n+1);
  arr.fill(-1);
  if(arr[n] !== -1){
    return arr[n];
  }
    if(n <= 1){
      arr[n] = n;
      return arr[n];
    }

    arr[n] = fib1(n-1) + fib1(n-2);
    return arr[n];
    
}

console.log(fib1(6));


function fib2(n){
  const arr = Array(n+1);
  arr[0] = 0;
  arr[1] = 1;

  for(let i = 2; i<= n; i++){
    arr[i] = arr[i-1] + arr[i-2];
  }
  console.log(arr[n]);
}

fib2(6);


function fib3(n){
  let first = 0;
  let second = 1;
  if(n === 0){
    return console.log(0)
  }
  for(let i = 2; i<=n; i++){
    let third = first + second;
    first = second;
    second = third;
  }
  console.log(second)
}

fib3(21);