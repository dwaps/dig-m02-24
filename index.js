const EventEmitter = require('events');
const emitter = new EventEmitter();

let count = 0;
const { SIZE = 8, SPEED = 50, DURATION = 5000 } = require('./config.json');

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
  () => emitter.emit('dot', ++count == SIZE),
  SPEED
);

setTimeout(stop, DURATION);
