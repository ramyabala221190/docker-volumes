var express = require('express');
var router = express.Router();
const fs=require('fs');
const path=require('path');

/* GET home page. */
router.get('/*', function(req, res, next) {
  let errorMessage=`
  \nLogging request received at ${req.originalUrl} at ${new Date()} in ${process.env.NODE_ENV} environment}
  `
  fs.appendFile(path.join('logs','logs.txt'), errorMessage, err => {
    if (err) {
      console.error(err);
    }
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
