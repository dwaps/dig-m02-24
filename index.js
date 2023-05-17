// MODULE HTTP/S

const url = 'https://raw.githubusercontent.com/torvalds/linux/master/MAINTAINERS';

const { get } = require('https');

let count = 0;

get(url, (res) => {
  res.on('data', data => {
    ++count;
    const ko = data.length/1024;
    console.log('Paquet n°%d: %iKo', count, ko);
  });
  res.on('end', () => {
    console.log("Nombre total de paquets reçus: %d", count);
  })
});
