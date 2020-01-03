const dns = require('dns'); 
const url = require('url');
const valid_url = require('valid-url');

module.exports = class {
  constructor(input_str){
    this.input = input_str;
    this.dns = dns;
    this.url = url
    this.valid_url = valid_url;
  }
  validate_syntax(input = this.input){
    return this.valid_syntax = (this.valid_url.isWebUri(input)) ? true : false;
  }
  async validate_address(input = this.input){
    // dns look up is asynchronous so I have wrapped it in a promise;
    let lookup = new Promise( (resolve, reject) => {
      let host = () => {
        let url = new URL(input);
        return url.host;
      }
      this.dns.lookup(host(), (err, address, family) => {
        resolve({err, address, family})
      })
    })
    let result = await lookup;
    return this.valid_address = (result.err) ? false : true;  
      
  }
  async run(){
    return this.valid = (this.validate_syntax()) ? await this.validate_address() : false;     
  }
}