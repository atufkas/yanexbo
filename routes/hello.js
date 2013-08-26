exports.dumpRequest = function(req, res) {

  res.render('dump', {
    title: 'Dump of some request header values',
    dumpValues: req.headers
  });
};
