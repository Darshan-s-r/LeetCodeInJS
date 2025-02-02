function CanConstruct(word, wordBank){
  return helper(word, wordBank, memo={});
}

function helper(word, wordBank, memo){
  if(word in memo){
    return memo[word]
  }
  if(word === ''){
    return true;
  }
    for(let w of wordBank){
      if(word.slice(0, w.length) === w){
          let subResult = helper(word.slice(w.length), wordBank, memo)
          if(subResult){
            memo[word] = true;
            return true;
          }
      }
    
  }
  memo[word] = false;
  return false

}

console.log(CanConstruct('spider', ['sp', 'p', 'id', 'spi','er']));