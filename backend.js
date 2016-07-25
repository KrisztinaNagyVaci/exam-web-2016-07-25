'use strict';

var ceasar = require('./ceasar')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('./client'))


app.post('/decode', function(req, res){
  var item = {
        status: 'ok',
        text: ceasar.cc3(req.body.text, Number(req.body.shift))
    };
    console.log(-req.body.shift);
    res.send(item);
});


app.listen(3000);
