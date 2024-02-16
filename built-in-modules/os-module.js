const os = require('os');

let freeMemory = os.freemem();
let homeDir = os.homedir();
let machine = os.machine();
let type = os.type();

console.log(`Free Momory: ${freeMemory}`);
console.log(`Home: ${homeDir}`);
console.log(`Laptop type: ${type} ${machine} `);
