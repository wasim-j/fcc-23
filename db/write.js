const Record = require('./model');

module.exports = async (original_url) => {
  // @ short_url(number)
  // @ original_url(string) 
  // returns a promise
  
  // get last record
  let last_record = await Record.findOne().sort({ field: 'asc', _id: -1 });
  // if last record then set this record to last record plus one
  // else set this record to one
  let short_url = (last_record) ? last_record.short_url + 1 : 1;
  
  let new_record = new Record({
    short_url:short_url, 
    original_url:original_url
  });
  
  let saved_record = await new_record.save() // a promise which if successful will return new_record
  return {
    original_url: saved_record.original_url, 
    short_url: saved_record.short_url
  }
}