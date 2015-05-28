var wordOrder = function(string){
  var wordList = string.split(" ");
  var count = 0;
  var finalArray = [];
  wordList = wordList.sort();
  var index = 0;
  var cloneList = wordList.slice();

  cloneList.forEach(function(word){
    for(var i = 0; i < cloneList.length; i++){
      if(word === wordList[0]){
        count++
        wordList.splice(0, 1);
      }
    }

    if(count > 0){
      finalArray.push([count, word]);
    }

    count = 0;
  });
  debugger;



  return finalArray.join(" ");
}
