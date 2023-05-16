// MODULE EVENTS

// const EventEmitter = require('events');


class EventEmitter {

  constructor() {
    this.events = {};
  }
  
  on(eventName, listener) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(listener);
  }

  once(eventName, listener) {
    listener.once = true;
    this.on(eventName, listener);
  }

  emit(eventName, ...args) {
    const eventListeners = this.events[eventName];
    
    if (eventListeners) {
      eventListeners.forEach(listener => listener(...args));
      eventListeners.forEach((listener, index) => {
        if (listener.once) {
          eventListeners.splice(index, 1);
        }
      });
    }
  }
}

const emitter = new EventEmitter();

const FILE_OPENED = 'FILE_OPENED';
let count = 0;

emitter.once(FILE_OPENED, () => console.log("Fichier ouvert ", ++count, " fois"));
emitter.on(FILE_OPENED, (data, nb) => console.log("Fichier ouvert ", ++count, " fois", data, nb));

emitter.emit(FILE_OPENED, 'dfghjklkjh', 789876);
emitter.emit(FILE_OPENED, 'dfghjklkjh', 789876);
emitter.emit(FILE_OPENED, 'dfghjklkjh', 789876);
