var express = require('express');
var router = express.Router();
var path = require('path')
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("enviando")
  res.sendFile(path.resolve(__dirname, '../views/client.html'))
});

module.exports = router;
