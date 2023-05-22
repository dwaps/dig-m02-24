const router = require('express').Router();
const appRoutes = require('./app.routes');
const apiTodosRoutes = require('./api-todos.routes');

router.use('/', appRoutes);
router.use('/api', apiTodosRoutes);

router.get('*', (req, res) => res.redirect('/home'));

module.exports = router;
