exports.homeCtrl = (req, res) => {
  res.render('pages/home', {
    name: 'Coco'
  });
}

exports.presentationCtrl = (req, res) => {
  res.render('pages/presentation');
}

exports.contactCtrl = (req, res) => {
  res.render('pages/contact');
}
