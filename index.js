function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for (i = 0; i < musicians.length; i++) {
    newArray.push("${muscians} plays the ${instruments}");
  }
  return newArray;
}