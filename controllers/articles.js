const Article = require('../models/article');
const { seedArticles } = require('../utils/seedArticles');

const getArticleById = async (req, res, next) => {
    try {
        const article = await Article.findOne({id: req.params.articleId});
        seedArticles();
        res.setHeader('Content-Type', 'application/json');
        res.send(article);
    } catch (err) {
        console.warn(err);
    }
};

module.exports = {
    getArticleById
};