const { todos } = require('../database/data.json');

exports.homeCtrl = (req, res) => {
  res.render('pages/home');
}

exports.presentationCtrl = (req, res) => {
  res.render('pages/presentation');
}

exports.todosCtrl = (req, res) => {
  res.render('pages/todos', { todos });
}

exports.contactCtrl = (req, res) => {
  res.render('pages/contact');
}
