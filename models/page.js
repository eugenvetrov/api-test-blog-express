const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pageSchema = new Schema({
    page_type: String,
    meta: {
        title: String,
        description: String,
        slug: String
    },
    body: [
        {
          type: {
            type: String
          },
          id: String,
          data: {
            title: String,
            articles: [
              {
                title: String,
                link: String,
                image: String
              },
              
            ]
          }
        }
    ]
});

module.exports = mongoose.model('page', pageSchema);