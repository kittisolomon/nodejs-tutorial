console.log(__filename);
console.log(__dirname);
var url = 'https://mylogger.io/log';

function log(message) {
    // Send Http request
    console.log(message);
}

module.exports = log;