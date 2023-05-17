// MODULE HTTP/S

const http = require('http');
const server = http.createServer();
const port = process.env.PORT || 8080;

server.listen(port);
server.on('listening', () => console.log(`Listening on port ${port}`));

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write('<h1>Bienvenue</h1>');
  res.end();
})
