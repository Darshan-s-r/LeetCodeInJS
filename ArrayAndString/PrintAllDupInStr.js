function PrintAllDupInStr(str){
  str = str.toLowerCase();
  let N = str.length;
  let obj = {}
  for(let i = 0; i<N; i++){
    let temp = str.charAt(i);
    if(obj[temp]){
      obj[temp] = obj[temp] + 1;
    }else{
      obj[temp] = 1;
    }
  }
  Object.entries(obj).forEach(([keys, values])=>{
    console.log(keys, ":", values);
  })
}

let str = "geEksforGEeks";
PrintAllDupInStr(str);