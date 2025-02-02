function CanConstruct(word, wordBank){
  return helper(word, wordBank);
}

function helper(word, wordBank){
  if(word === ''){
    return true;
  }
    for(let w of wordBank){
      if(word.slice(0, w.length) === w){
          let subResult = helper(word.slice(w.length), wordBank)
          if(subResult){
            return true;
          }
      }
    
  }

  return false

}

console.log(CanConstruct('spider', ['sp', 'p', 'id', 'spi','er']));