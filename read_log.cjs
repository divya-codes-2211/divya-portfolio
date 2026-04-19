const fs = require('fs');
const text = fs.readFileSync('build_error.txt', 'utf16le');
console.log(text.replace(/\r/g, ''));
