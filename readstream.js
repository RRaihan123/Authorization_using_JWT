/* const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
       
        req.on('data', (chunk) => {
            console.log(chunk.toString())
        });
        
            res.write('Thank you for submitting');
            res.end();
       
    } else {
        res.write('Not found');
        res.end();
    }
});
server.listen(3000);
console.log('listening on port 3000'); */


/* const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thank you for submitting');
            res.write(parsedBody);
            res.end();
        });
    } else {
        res.write('Not found');
        res.end();
    }
});
server.listen(3000);
console.log('listening on port 3000'); */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
    myReadStream.pipe(res);
});

server.listen(3000);

console.log('listening on port 3000');