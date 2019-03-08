// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = 3003;

app.use('/', expressStaticGzip(path.join(__dirname, '/../public'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz'
  }],
  orderPreference: ['br', 'gz']
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/amenities/:homeId', (req, res) => {
  db.getAmenenities(req.params.homeId, (err, amenData) => {
    if(err) {
      throw err;
    } else {
      stringedAmenData = JSON.stringify(amenData);
      res.send(stringedAmenData);
    }
  });
})

//post request
app.post('/api/amenities', (req, res) => {
  db.insertInfo(req.body, (err, data) => {
    if (err) {
      res.status(400).end()
      return;
    } else {
      res.status(201).end();
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

app.listen(port, () => {
  console.log(`I'm serving from http://localhost:${port}`);
});