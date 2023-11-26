const express = require('express');
const router = express.Router();
const { getPages } = require('../controllers/pages')

/* GET home page. */
router.get('/', function(req, res, next) {
  getPages(req, res);
});

module.exports = router;
