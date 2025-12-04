// lab17.js

console.log("George Athanasopouloss");
console.log('----- Example 1: Console -----');

console.warn("Warning! Check the last line before proceeding!");
console.error("ERROR, port is not available!");
console.trace("TRACE LOCATION");

setTimeout(() => {
    console.warn("Warning! input string for the next line");
}, 3000);

console.log('----- Example 2: Creating a simple module file -----');

const name = require('./mod');

console.log(name.helper("Peter"));
console.log(name.userid(12345));
console.log(name.useremail("peter@neverland.edu"));

console.log('----- Example 3: Event Emitter -----');

let events = require('events');
let eventEmitter = new events.EventEmitter();  

eventEmitter.on('test', function (a) {
    console.log(a);
});

eventEmitter.emit('test', 'EVENTS IN NODEJS');
