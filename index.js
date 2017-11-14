function theBeatlesPlay(musicians, instruments) {
var newTheBeatlesPlay = [];
  for (i = 0; i < musicians.length; i++) {
    newTheBeatlesPlay.push(`${musicians} plays ${instruments}`)
  }
  return newTheBeatlesPlay
}
