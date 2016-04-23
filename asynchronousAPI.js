var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var content;

//If the content hasn’t been
//read into memory, read it
//asynchronously.

function readFileIfRequired(cb) {

if (!content) {
  fs.readFile(__filename, 'utf8', function(err, data) {
  content = data;
//If the content has been read,
//pass the cached version to
//the callback, but first use
//process.nextTick to ensure
//the callback is executed later.

  console.log('readFileIfRequired: readFile');
  
  cb(err, content);

});



} else {
  process.nextTick(function() {
    console.log('readFileIfRequired: cached');

    cb(null, content);

});

}

//Make subsequent calls to the
//asynchronous operation to
//ensure it behaves as expected.

}


readFileIfRequired(function(err, data) {
  console.log('1. Length:', data.length);

  readFileIfRequired(function(err, data2) {
  console.log('2. Length:', data2.length);
  });

  console.log('Reading file again...');

});

console.log('Reading file...');

