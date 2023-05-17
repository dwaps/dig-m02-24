// MODULE HTTP/S

const url = 'https://raw.githubusercontent.com/torvalds/linux/master/MAINTAINERS';

const { request } = require('https');

const myRequest = request(new URL(url));

myRequest.setHeader('Accept', 'application/json; charset=utf-8');
myRequest.end();

myRequest.on('response', res => {
  console.log(res.headers['content-length'])
})
