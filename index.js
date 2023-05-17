// MODULE HTTP/S

const http = require('http');
const port = process.env.PORT || 8080;
const { readFileSync } = require('fs');
const { extname } = require('path');

const pages = {
  '/home': readFileSync('index.html'),
  '/presentation': readFileSync('presentation.html'),
  '/contact': readFileSync('contact.html'),
  '/style.css': readFileSync('style.css'),
  '/app.js': readFileSync('app.js'),
};

http
  .createServer((req, res) => {
    let contentType = 'text/html; charset=utf-8';
    
    switch (extname(req.url)) {
      case '.css': contentType = 'text/css'; break;
      case '.js': contentType = 'text/javascript'; break;
      case '.ico':
      case '.png': contentType = 'image/*'; break;
    }
    
    if (pages[req.url]) res.write(pages[req.url]);
    else res.writeHead(301, { Location: `http://localhost:${port}/home` });

    res.end();
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
