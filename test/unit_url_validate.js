// to run - in console: npm test

// Mocha allows you to use any assertion library you wish. 
// Node.js has a built-in assert module : require('assert');
const chai = require('chai');
const assert = chai.assert;

let Url_Validator = require('../url_validate');
let a_1 = "jiejd9d3jiedj";
let b_1 = null;
let c_1 = "https://www.bbc.co.uk/";

describe('Unit Test: Url Validator', () => { 
  
  describe('invalid syntax', () => {

    it(`${a_1}: syntax is false`, async () => {
      let url_validator = new Url_Validator(a_1)
      await url_validator.run();
      assert.isFalse(url_validator.valid_syntax);
    });
    it(`${a_1}: url invalid`, async() => {
      let url_validator = new Url_Validator(a_1)
      await url_validator.run();
      assert.isFalse(url_validator.valid);
    });
    
  });
    
  describe('valid syntax and invalid address', () => {  
    
    it.skip(`${b_1}: syntax is valid`, async() => {
      let url_validator = new Url_Validator(b_1)
      await url_validator.run();      
      assert.isTrue(url_validator.valid_syntax);

    });
    it.skip(`${b_1}: address is false`, async() => {
      let url_validator = new Url_Validator(b_1)
      await url_validator.run();   
      assert.isFalse(url_validator.valid_address);

    });
    it.skip(`${b_1} url invalid`, async() => {
      let url_validator = new Url_Validator(b_1)
      await url_validator.run();   
      assert.isFalse(url_validator.valid);
    });

  });
    
  describe('valid syntax and valid address',  () => {
    
    it(`${c_1}: syntax is true`, async () => {
      let url_validator = new Url_Validator(c_1)
      await url_validator.run();
      assert.isTrue(url_validator.valid_syntax);

    });
    it(`${c_1}: address is true`, async() => {
      let url_validator = new Url_Validator(c_1)
      await url_validator.run();
      assert.isTrue(url_validator.valid_address);

    });
    it(`${c_1}: url is valid`, async () => {
      let url_validator = new Url_Validator(c_1)
      await url_validator.run();
      assert.isTrue(url_validator.valid);
    });
    
  });
  
  
  
  
});