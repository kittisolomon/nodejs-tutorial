const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listerner
logger.on('messageLogged', (arg) => {
    console.log('Listerner Called!', arg);
});

logger.log('Hi Node Dev');