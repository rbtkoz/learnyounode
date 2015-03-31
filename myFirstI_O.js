var fs = require('fs')

var file_path = process.argv[2];
//console.log(file_path);

var file_buf = fs.readFileSync(file_path);
//console.log(file_buf);

var file = file_buf.toString();
//console.log(file);

var lineArr = file.split('\n');
console.log(lineArr.length-1);
