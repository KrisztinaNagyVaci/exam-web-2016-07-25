'use strict';

var url = 'http://localhost:3000/decode';

var numberInput = document.querySelector('.number_input');
var textInput = document.querySelector('.text_input');
var sendButton = document.querySelector('.send_button');
sendButton.addEventListener('click', addElement);

function addElement(){
  var inputData = JSON.stringify({
    'shift' : numberInput.value,
    'text' : textInput.value
  });
  callAPI(createElement, 'POST', url, true, inputData);
};

function callAPI(callback, method, url, value, senddata){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var response = JSON.parse(xhr.response);
      callback(response);
    }
    xhr.open(method, url, value);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
    xhr.send(senddata);
  };


function createElement(response){
  var decryptedItems = document.querySelector('.decrypted_items');
  var pTag = document.createElement('p');
  decryptedItems.appendChild(pTag);
  pTag.innerHTML = response.text;
}
