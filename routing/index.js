const router = require('express').Router();
const { homeCtrl, presentationCtrl, contactCtrl } = require('../controllers');

router.get('/home', homeCtrl);
router.get('/presentation', presentationCtrl);
router.get('/contact', contactCtrl);

router.get('*', (req, res) => res.redirect('/home'));

module.exports = router;
