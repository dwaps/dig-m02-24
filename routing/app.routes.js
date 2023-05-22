const router = require('express').Router();
const { homeCtrl, presentationCtrl, contactCtrl, todosCtrl } = require('../controllers/app.controller');

router.get('/home', homeCtrl);
router.get('/presentation', presentationCtrl);
router.get('/todos', todosCtrl);
router.get('/contact', contactCtrl);

module.exports = router;
