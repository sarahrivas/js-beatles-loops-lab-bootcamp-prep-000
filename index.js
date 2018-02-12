function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var newArr = [];
  for(var i = 0; i < arrayMusicians.length; i++){
    for(var j = 0; i <arrayInstruments.length; j++){
    newArr.push(`${arrayMusicians[i]} plays ${arrayInstruments[j]}`);
    }
  }
  newArr;
}

function johnLennonFacts (arrayFacts) {
  var i = 0;
  var newArr;
  while (i > 0) {
    newArr.push(`${arrayFacts[i]}!!!` );
    i++;
  }
  return newArr;
}

function iLoveTheBeatles (number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number ++;
  } while (number < 15); 
  return newArray;
}