let http = require("http");
let fs = require('fs');

const server = http.createServer((request, response) => {
    let path = request.url.toLowerCase();

    switch (path) {
        case '/image':
            fs.readFile('sian.png', (err, data) => {
                if (err) {
                    console.log(err);
                    response.writeHead(400, { 'Content-type': 'text/html' });
                    response.end("No such image");
                } else {
                    response.writeHead(200, { 'Content-type': 'image/jpg' });
                    response.end(data);
                }
            });
            break;
        case '/pdf': 
            fs.readFile('lab11_java.pdf', (err, data) => {
                if (err) {
                    console.log(err);
                    response.writeHead(400, { 'Content-type': 'text/html' });
                    response.end("PDF not found.");
                } else {
                    response.writeHead(200, { 'Content-type': 'application/pdf' });
                    response.end(data);
                }
            });
            break;
        case '/home':
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end('Welcome to my website');
            break;
        default:
            response.writeHead(404, { 'Content-type': 'text/html' });
            response.end('Page not found.');
            break;
    } 
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started...');
});