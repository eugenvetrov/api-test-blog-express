const express = require('express');
const router = express.Router();
const { getArticleById } = require('../controllers/articles')

/* GET home page. */
router.get('/:articleId', function(req, res, next) {
    getArticleById(req, res);
});

module.exports = router;