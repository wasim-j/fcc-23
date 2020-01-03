let Url_Validator = require('../url_validate');
let write = require('../db/write');
let read = require('../db/read')

module.exports = app => {
  
  app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/views/index.html');
  });
  
  let api_route = "/api/shorturl/:url";

  app.post(api_route, async (req, res) => {
    let original_url = req.body.url;
    let url = new Url_Validator(original_url);
    await url.run();
    let msg = (url.valid)? await write(original_url): {error: "invalid URL"} 
    res.json(msg);
  });

  app.get(api_route, async (req, res) => {
    let short_url = parseInt(req.params.url);
    let url =  (Number.isInteger(short_url)) ? await read(short_url) : false
    let directions = (url) ? url : "../..";
    res.redirect(directions);
  });
  
}