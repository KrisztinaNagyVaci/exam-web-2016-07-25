'use strict';

var ceasar = require('./ceasar')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('./client'))


app.post('/decode', function(req, res){
  if (ceasar.decryptItem(req.body.text, Number(req.body.shift)) === "You have entered an invalid character."){
    var errorResponse = {
      status: 'error',
      text: ceasar.decryptItem(req.body.text, Number(req.body.shift))
    };
    res.send(errorResponse);
  } else {
    var validResponse = {
          status: 'ok',
          text: ceasar.decryptItem(req.body.text, Number(req.body.shift))
      };
      res.send(validResponse);
  }
});


app.listen(3000);
