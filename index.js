var co = require('co');
var xspawn = require('xspawn');
function* tap() {
  return xspawn('adb shell input tap 615 836');
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

