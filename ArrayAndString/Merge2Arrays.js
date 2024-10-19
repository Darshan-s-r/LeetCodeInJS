var merge = function(nums1, m, nums2, n) {
  let temp = [];
  for(let i = 0;i<m;i++){
      temp.push(nums1[i]);
  }
  let i = 0;
  let j = 0;
  let N = 0;
  while(i < temp.length && j < n){
      if(temp[i] < nums2[j]){
          nums1[N] = temp[i];
          i++;
      }else{
          nums1[N] = nums2[j];
          j++;
      }
      N++;
  }

  if(i < temp.length){
      while(i < temp.length){
          nums1[N] = temp[i];
          i++;
          N++;
      }
  }

    if(j < n){
      while(j < n){
          nums1[N] = nums2[j];
          j++;
          N++;
      }
  }

};

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]

merge(nums1, 3, nums2, nums2.length);
console.log(nums1)