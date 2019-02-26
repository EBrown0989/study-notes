fs.readFile('zork.txt', (err, data) => {
    !err ? console.log(data) : console.log(err);
});

fs.readFile('zork.txt', (err, data) => {
    !err ? console.log(data.toString()) : console.log(err.toString());
});

fs.readFile('zork.txt', 'utf8', (err, data) => {
    !err ? console.log(data) : console.log(err);
});

global.process
global.process.version
global.process.versions
process.cwd()

var logger = d => { process.stdout.write(d + '\n'); }
logger('hello world')
console.log('hello world')

var welcomeMsg = () => {
    console.log("Welcome to the Great Underground Empire!");
}
welcomeMsg()
var start = callback => {
    callback();
}
start(welcomeMsg)

var look = dir => {
    if ( dir === 'west' ) { console.log("There is a small mailbox here."); }
    if ( dir === 'east' ) { console.log("You are standing next to a white house."); }
}
var walk = dir => {
    if ( dir === 'west' ) { console.log("It is very dark; You are likely to be eaten by a grue!"); }
    if ( dir === 'south' ) { console.log("You are standing on the edge of a chasm.");}
}
var getInput = (param, cb) => {
    cb(param);
}
getInput('west', look)
getInput('east', look)
getInput('west', walk)
getInput('south', walk)
getInput('north', look)

1 + 2
4 * 5
var foo = 'name'
var boo = 'other name'
foo
boo
foo + ' ' + boo
1 + 2 + 3
_ + 4

var myName = () => { return 'Joseph' }
myName()

//Tab Completion
var sayMyName = () => { return 'Erik'; }
sayMyName()
sayMyName
var mistake = function() {
var mistake = function() {
var mistake = function() {
myName
myName()

var circle = require('./circle.js');
circle.area(4)
circle.circumference(4)

var colors = require('colors');
console.log("All the colors of the rainbow".rainbow);

var http = require('http')
var circle = require('./circle')

console.log("Error!".error);
colors.setTheme({
    error: 'red',
    warn: 'yellow'
});
console.log("Error!".error);
console.log("This is a warning!".warn);

var circle = require('./circle.js');
var circles = require('./circles');
var myCircles = circles(4);
myCircles.area()
myCircles.circumference()

var sayHello = () => { console.log('Hello to you!'); }
var sayGoodbye = () => { console.log('Goodbye then!'.rainbow); }

var EventEmitter = require('events').EventEmitter;
emitter = new EventEmitter();

emitter.on('hello', sayHello)
emitter.on('goodbye', sayGoodbye)

emitter.emit('hello')
emitter.emit('goodbye')
global.emitter._events

emitter.on('hello', sayHello)
emitter.on('hello', sayHello)
global.emitter._events
global.emitter._events.hello.toString()

emitter.emit('hello')
emitter.removeListener('hello', sayHello)
emitter.emit('hello')
emitter.removeAllListeners('hello')
emitter.emit('hello')

emitter.setMaxListeners(20)
