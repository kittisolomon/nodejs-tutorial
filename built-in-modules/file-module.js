const fs = require('fs');

// reading files in directory  Synchronously
// const files = fs.readdirSync('./');
// console.log(files);

// reading files in directory asynchronously

const files = fs.readdir('./', (error, files) => {
    if(error) {
        console.log('Error', error);
    }else {
        console.log('Result:',files);
    }
})