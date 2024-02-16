const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listerner
emitter.on('messageLogged', (arg) => {
    console.log('Listerner Called!', arg);
});

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'https://events.io/events'});

// Assignment

// Register the login event
// emitter.on('logging', (eventArg) => {
//     console.log(eventArg);
// })

//Raise the logging event
// emitter.emit('logging', {data: 'Login Succesful!'})
