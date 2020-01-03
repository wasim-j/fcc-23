let Validator = require('./url_validate');

let x = "jiejd9d3jiedj";
let y = "https://www.bbc.co.uk/"
let z = "https://www.chaijs.com/"

let a = async () => {
  let v = new Validator(y);
  await v.run();
  console.log(v);
  return v;
}

a();


