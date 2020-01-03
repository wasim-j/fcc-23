const Collection = require('./model');

module.exports = (short_url) => {
  // @ short_url(number) 
  // returns a promise
  console.log(short_url)
  return new Promise((resolve, reject) => {
    Collection.findOne({short_url: short_url}, (err, record) => {
      if (err) console.log(err);
      resolve(record.original_url);
    })
  })
}