const Page = require('../models/page');
const { seedPages } = require('../utils/seedPages')

const getPages = async (req, res, next) => {
    try {
        const pages = await Page.findOne({})
        seedPages();
        res.setHeader('Content-Type', 'application/json');
        res.send(pages);
    } catch (err) {
        console.warn(err);
    }
};

module.exports = {
    getPages
};