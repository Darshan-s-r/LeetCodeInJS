function AllConstruct(word, wordBank, memo={}){
  if(word in memo){
    return memo[word]
  }
  if(word === ''){
    return [[]]
  }
  let result = [];
  for(let w of wordBank){
    if(word.slice(0, w.length) === w){
      let subResult = AllConstruct(word.slice(w.length), wordBank, memo)
    
      for(let arr of subResult){
        result.push([w, ...arr])
      }
    }
  }
  memo[word] =  result; 
  return result;
}

console.log(AllConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
console.log(AllConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee', 'eeeeeee']))
