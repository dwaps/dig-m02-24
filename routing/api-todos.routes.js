const router = require('express').Router();
const { getTodos } = require('../controllers/api-todos.controller');

router.get('/todos', getTodos);

module.exports = router;
