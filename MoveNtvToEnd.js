function segregateElements(arr) {
  let N = arr.length;
  let arrN = [];
  let arrP = [];
  for(let i = 0; i< N; i++){
      if(arr[i] < 0){
          arrN.push(arr[i]);
      }
      if(arr[i] >= 0){
          arrP.push(arr[i]);
      }
  }

  //  return arr = [...arrP, ...arrN];
  for (let i = 0; i < arrP.length; i++) {
    arr[i] = arrP[i];
  }
  for (let i = 0; i < arrN.length; i++) {
    arr[arrP.length + i] = arrN[i];
  }
}

let arr = [1, -1, 3, 2, -7, -5, 11, 6];
segregateElements(arr);
console.log(arr);