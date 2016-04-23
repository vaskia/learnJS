var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  
  var events = new EventEmitter();
  
  events.emit('success'); 1((callout-globals-nexttick-1))
   
  return events;

}


complexOperations().on('success', function() {
  console.log('success!');
});
