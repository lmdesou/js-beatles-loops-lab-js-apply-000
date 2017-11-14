function theBeatlesPlay(musicians, instruments) {
var newTheBeatlesPlay = [];
  for (let i = 0; i < musicians.length ; i++) {
    newTheBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newTheBeatlesPlay
}

function johnLennonFacts(array) {
  var newJohnLennonFacts = [];
  let i = 0;
  while (i > array.length) {
    newJohnLennonFacts.push([array] + "!!!")
    i++;
  }
  return newJohnLennonFacts;
}
