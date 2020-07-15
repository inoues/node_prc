const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

let temp = fs.readFileSync('./temp.ejs', 'utf-8');

let server = http.createServer((req, res) => {
    var data = ejs.render(temp, {
        title: 'EJS test',
        contents1: '<p>エスケープされない</p>',
        contents2: '<p>エスケープされる</p>',
        arr: ['abc', 'dfa', 'aspes']
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});

server.listen(1234);
console.log('http://localhost:1234 start');