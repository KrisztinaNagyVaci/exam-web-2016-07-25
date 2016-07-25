var tape = require('tape');
var caesar = require('./caesar')

tape('decryptItem is a function', function(t){
  t.deepEqual(typeof caesar.decryptItem, 'function');
  t.end();
});

tape('decryptItem returns a string with valid input', function(t){
  t.deepEqual(typeof caesar.decryptItem('apple', 3), 'string');
  t.end();
});

tape('decryptItem returns a string with invalid character input', function(t){
  t.deepEqual(typeof caesar.decryptItem('6482368', 3), 'string');
  t.end();
});

tape('decryptItem returns the decrypted item with valid input', function(t){
  t.deepEqual(caesar.decryptItem('c', 2), 'a');
  t.end();
});

tape('decryptItem returns an error message with invalid character input', function(t){
  t.deepEqual(caesar.decryptItem('6868345', 3), 'You have entered an invalid character.');
  t.end();
});
