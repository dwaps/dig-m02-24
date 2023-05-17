const express = require('express');
const app = express();
const { resolve } = require('path');
const router = express.Router();

// CONFIGURATION DE L'APP
app.use('/static', express.static(resolve('public')));
app.use(router);

// ROUTING
router.get('/home', (req, res) => res.sendFile(resolve('views', 'home.html')));
router.get('/presentation', (req, res) => res.sendFile(resolve('views', 'presentation.html')));
router.get('/contact', (req, res) => res.sendFile(resolve('views', 'contact.html')));

app.get('*', (req, res) => res.redirect('/home'));


// LANCEMENT DU SERVEUR
const http = require('http');

http
  .createServer(app)
  .listen(3000, () => console.log('Listening on port 3000'));
