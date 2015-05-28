var wordOrder = function(string){
  var wordList = string.split(" ");
  wordList = wordList.sort();
  var count = 0;
  var unsortedArray = [];
  var cloneList = wordList.slice();
  var finalArray = []

  cloneList.forEach(function(word){
    for(var i = 0; i < cloneList.length; i++){
      if(word === wordList[0]){
        count++
        wordList.splice(0, 1);
      }
    }

    if(count > 0){
      unsortedArray.push([word, count]);
    }

    count = 0;
  });

  unsortedArray = unsortedArray.sort(function(a,b){
    return b[1] - a[1];
  });

  unsortedArray.forEach(function(element){
    finalArray.push(element.join(" : "));
  });

  return finalArray.join(" , ");
}

$(function(){
  $("form#input-form").submit(function(event){
    var string = $('input#input-string').val();
    var result = wordOrder(string);

    $("#word-order-count").text(result);
    $("#result").show()
    event.preventDefault();
  });
});
