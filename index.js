// MODULE EVENTS

// const EventEmitter = require('events');

class EventEmitter {}

const emitter = new EventEmitter();

const FILE_OPENED = 'FILE_OPENED';
let count = 0;

emitter.once(FILE_OPENED, () => console.log("Fichier ouvert ", ++count, " fois"));
emitter.on(FILE_OPENED, (data, nb) => console.log("Fichier ouvert ", ++count, " fois", data, nb));

emitter.emit(FILE_OPENED, 'dfghjklkjh', 789876);
emitter.emit(FILE_OPENED, 'dfghjklkjh', 789876);
emitter.emit(FILE_OPENED, 'dfghjklkjh', 789876);
