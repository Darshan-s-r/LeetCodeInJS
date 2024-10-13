function majorityElement(arr) {
       // your code here
       let n = arr.length;
       let ele = arr[0];
       let count = 0;
       for(let i = 0; i<n ; i++){
           if(count === 0){
               ele = arr[i];
               count = 1;
           }
           else if(ele === arr[i]){
                   count++;
               }
               else{
                   count--;
               }
       }
       let finalCnt = 0;
       for(let i = 0; i<n; i++){
           if(arr[i] === ele){
               finalCnt++;
           }
       }
       if(finalCnt > Math.floor(n/2)){
           return ele;
       }
       return -1;
   }


console.log(majorityElement([2, 2, 1, 1, 2, 2, 2]))