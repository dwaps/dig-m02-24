const EventEmitter = require('events');
const emitter = new EventEmitter();

let count = 0;
const config = {
  SIZE: 8,
  SPEED: 50,
  DURATION: 5000
};

const { readFileSync } = require('fs');
const configTxt = readFileSync('config.txt');
configTxt
  .toString()
  .split('\n')
  .forEach(data => {
    config[data.split('=')[0]] = +data.split('=')[1];
  });

const logDot = (clearLine) => {
  process.stdout.write('.');
  if (clearLine) {
    count = 0;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
  }
};
const stop = () => {
  console.log();
  emitter.removeAllListeners();
  process.exit(0);
};

emitter.on('dot', logDot);
emitter.on('stop', stop);

setInterval(
  () => emitter.emit('dot', ++count == config.SIZE),
  config.SPEED
);

setTimeout(stop, config.DURATION);
