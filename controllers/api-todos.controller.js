const { todos } = require('../database/data.json');

exports.getTodos = (req, res) => {
  res.json(todos);
}