function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for (musicians = 0; musicians < instruments.length; musicians++) {
    newArray.push("${muscians} plays the ${instruments}");
  }
  return newArray;
}
