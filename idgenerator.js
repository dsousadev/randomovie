

var generateRandomID = function () {
  function pad (number, length) {
    var str = '' + number;
    while(str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  return pad(Math.floor((Math.random() * 2155529) + 1), 7);
}


