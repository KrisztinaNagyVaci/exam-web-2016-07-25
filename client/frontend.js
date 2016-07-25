'use strict';

var controller = (function(){

  function addElement(){
    if (DOMfunctions.numberInput.value === '' || DOMfunctions.textInput.value === '' || (!/^[a-z A-Z]+$/.test(DOMfunctions.textInput.value))) {
      alert('Please fill in both input fields and only use letters!')
    };
    var inputData = JSON.stringify({
      'shift' : DOMfunctions.numberInput.value,
      'text' : DOMfunctions.textInput.value
    });
    APIfunctions.callAPI(DOMfunctions.createElement, 'POST', APIfunctions.url, true, inputData);
  };

  return {
    addElement: addElement
  }

})();


var APIfunctions = (function(){

  var url = 'http://localhost:3000/decode';

  function callAPI(callback, method, url, value, senddata){
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status >= 200){
            var response = JSON.parse(xhr.response);
            callback(response);
          }
      }
      xhr.open(method, url, value);
      xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
      console.log('Loading');
      xhr.send(senddata);
    };

  return {
    callAPI: callAPI,
    url: url
  }

})();


var DOMfunctions = (function(){

  var numberInput = document.querySelector('.number_input');
  var textInput = document.querySelector('.text_input');
  var sendButton = document.querySelector('.send_button');
  sendButton.addEventListener('click', controller.addElement);

  function createElement(response){
    var decryptedItems = document.querySelector('.decrypted_items');
    var pTag = document.createElement('p');
    decryptedItems.appendChild(pTag);
    pTag.innerHTML = response.text;
  }

  return {
    createElement: createElement,
    numberInput: numberInput,
    textInput: textInput,
    sendButton: sendButton
  }

})();
