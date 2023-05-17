const EventEmitter = require('events');
const emitter = new EventEmitter();
const { SIZE, SPEED, DURATION } = require('./variables');
let { count } = require('./variables');
const { DOT_EVENT, STOP_EVENT } = require('./events');
const { logDot, stop } = require('./functions');

emitter.on(DOT_EVENT, logDot);
emitter.on(STOP_EVENT, stop);

setInterval(
  () => {
    const clearLine = ++count == SIZE;
    emitter.emit(DOT_EVENT, clearLine);
    if (clearLine) count = 0;
  },
  SPEED
);

setTimeout(() => stop(emitter), DURATION);
