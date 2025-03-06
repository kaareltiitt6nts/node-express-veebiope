import { EventEmitter } from 'events';

const emitter = new EventEmitter();

function greetHandler(name) {
  console.log('tere ' + name);
}

function goodbyeHandler(name) {
  console.log('tere ' + name);
}

emitter.on('greet', greetHandler);
emitter.on('goodbye', goodbyeHandler);

emitter.emit('greet', 'abcde');
emitter.emit('goodbye', 'abcde');

emitter.on('error', (err) => {
  console.log('tekkis viga:', err);
});

emitter.emit('error', new Error('midagi läks viltu'));