const { resolve } = require('path');

exports.homeCtrl = (req, res) => {
  res.sendFile(resolve('views', 'home.html'));
}

exports.presentationCtrl = (req, res) => {
  res.sendFile(resolve('views', 'presentation.html'));
}

exports.contactCtrl = (req, res) => {
  res.sendFile(resolve('views', 'contact.html'));
}
