const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: Number,
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
          type: Schema.Types.Mixed
        },
      }
    ]
});

module.exports = mongoose.model('article', articleSchema);