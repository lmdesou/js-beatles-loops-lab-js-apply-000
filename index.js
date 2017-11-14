function theBeatlesPlay(musicians, instruments) {
var newTheBeatlesPlay = [];
  for (let i = 0; i < musicians.length ; i++) {
    newTheBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newTheBeatlesPlay
}

function johnLennonFacts(array) {
  var newJohnLennonFacts = [];
for (array.length > 1) {
  let i = 0
    newJohnLennonFacts.push(array[i] + "!!!")
  }
  return newJohnLennonFacts;
}
