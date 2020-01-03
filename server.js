'use strict';

const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const connect_to_db = require('./db/connect')
const routes = require('./routes/routes.js')

let db = connect_to_db();
let app = express();

const port = process.env.PORT || 3000; // Basic Configuration 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(port, function () {
  console.log('Node.js listening ...');
});