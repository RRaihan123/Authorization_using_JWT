
/* //Path Module
var path = require('path');
var myPath = 'D:/My_Work/WEB/Node_JS/class_05/path.js'

console.log(path.basename(myPath))
console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log(path.parse(myPath))*/
 

/* //OS Module
var os = require('os');
console.log(os.platform())
console.log(os.homedir())
console.log(os.freemem())
console.log(os.cpus()) */


/* //fs Module
var fs = require('fs')
//fs.writeFileSync('mine.txt','Hi')     // Synchronous
//fs.appendFileSync('mine.txt','hello')

//var data = fs.readFileSync('mine.txt')   // Synchronous
//console.log(data.toString())

fs.readFile('mine.txt',(err,data)=>{
    console.log(data.toString())
}) */

/* //events Module
var EventEmitter = require('events')
var emitter = new EventEmitter()

emitter.on('bellring',({period,text})=>{
    console.log(`lets go home because ${period} ${text}`)
})

setTimeout(()=>{
    emitter.emit('bellring',{
        period:"first",
        text:"period is over"
    })
},2000) */

/* const School = require('./school');

const school = new School();

// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod(); */

// http Module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello programmers!');
        res.write('How are you doing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');


