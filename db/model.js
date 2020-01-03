const mongoose = require('mongoose');

const url_schema = new mongoose.Schema ({
  original_url : {type: String, required: true},
  short_url: {type: Number, required: true}
})

module.exports = mongoose.model(process.env.DB_COLLECTION, url_schema);