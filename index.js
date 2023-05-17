// MODULE HTTP/S

const http = require('http');
const port = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Bienvenue</h1>');
    res.end();
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
