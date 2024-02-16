const EventEmitter = require('events');

var url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send Http request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'https://events.io/events'});
    }
}

module.exports = Logger;