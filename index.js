var app = require('express')();
app.get('/', function(req, res) {
  return res.json({ 'env': process.env });
});
app.listen(80);
