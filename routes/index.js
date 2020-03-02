var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', page: 'login' });
});

router.get('/profile', (req,res)=>{
  res.render('index', { title: 'Express', page: 'profile', month:'July' })
})
module.exports = router;
