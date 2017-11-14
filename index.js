function theBeatlesPlay(musicians, instruments) {
var newTheBeatlesPlay = [];
  for (let i = 0; i < musicians.length ; i++) {
    newTheBeatlesPlay.push(`${musicians[i]} plays ${instruments}`)
  }
  return newTheBeatlesPlay
}
