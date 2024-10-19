var reverseString = function(s) {
  let N = s.length;
  let i = 0;
  while(i<N/2){
      [s[i], s[N-1-i]] = [s[N-1-i], s[i]];
      i++;
  }
};

let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s)