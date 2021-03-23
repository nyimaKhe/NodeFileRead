const fs = require('fs');

const readStream = fs.createReadStream('./hello.txt', { encoding:'utf8' });
const writeStream = fs.createWriteStream('./file2.txt');


readStream.on('data', (chunk)=> {
    console.log('---- New Chunk ----');
    console.log(chunk);

    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
});

