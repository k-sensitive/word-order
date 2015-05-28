var wordOrder = function(string){
  var wordList = string.split(" ");
  var count = 0;
  var finalArray = [];

  wordList.forEach(function(word){
    for(var i = 0; i < wordList.length; i++){
      if(word === wordList[i]){
        count++;
        wordList.splice(i, 1);
        i--;
      }
    }

    finalArray.push(word + " " + count);

    count = 0;
  });
  return finalArray.join(" ");
}
