  
   function isPalindrome(S){
      let i = 0;
      let N = S.length;
      while(i<N/2){
          if(S[i] !== S[N-1-i]){
            return 0;  
          }
          i++;
      }
      return 1;
  }

  console.log(isPalindrome("epajfxzfnvte"));