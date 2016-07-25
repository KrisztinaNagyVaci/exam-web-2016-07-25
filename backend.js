'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('./client'))

// app.post('/decode', function(req, res){
//   var item = {
//         status: 'ok',
//         text: req.body.text
//     };
//     res.send(item);
// });

// app.post('/decode', function(req, res){
//   function change(str, number){
//     return str;
//   }
//
//   var item = {
//         status: 'ok',
//         text: change(req.body.text)
//     };
//     res.send(item);
// });

app.post('/decode', function(req, res){
  function cc2(str, number) {
  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if (str.charCodeAt(i) + number <= 90 && str.charCodeAt(i) + number >= 65){
        newString.push(String.fromCharCode(str.charCodeAt(i) + number));
      } else if (str.charCodeAt(i) + number >= 90) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - 24));
      } else if (str.charCodeAt(i) + number <= 65){
        newString.push(String.fromCharCode(str.charCodeAt(i) + 24));
      }
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      if (str.charCodeAt(i) + number <= 122 && str.charCodeAt(i) + number >= 97){
        newString.push(String.fromCharCode(str.charCodeAt(i) + number));
      } else if (str.charCodeAt(i) + number >= 122) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - 24));
      } else if (str.charCodeAt(i) + number <= 97){
        newString.push(String.fromCharCode(str.charCodeAt(i) + 24));
      }
    }
  }
  return newString.join("");
}
  var item = {
        status: 'ok',
        text: cc2(req.body.text, Number(req.body.shift))
    };
    console.log(req.body.shift);
    res.send(item);
});







app.listen(3000);
