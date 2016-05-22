var co = require('co');
var xspawn = require('xspawn');
function* tap() {
  var x = 615 + Math.floor(Math.random() * 20)
  var y = 836 + Math.floor(Math.random() * 20)
  return xspawn(`adb shell input tap ${x} ${y}`);
}
var count = 0;
function* start() {
  while(true) {
    console.log('round ' + count++);
    yield tap();
  }
}
co(start);
co(start);
co(start);
co(start);
co(start);
co(start);

