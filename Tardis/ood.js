// Generated by CoffeeScript 1.6.3
(function() {
  var oodFree, oodFreeM, oodSlave, oodSlaveM;

  oodSlaveM = function(number, message) {
    return alert("I am Ood number " + number);
  };

  alert(message);

  oodSlave = function(number) {
    return alert("I am Ood number " + number);
  };

  oodFreeM = function(message) {
    alert("I'm free!");
    return alert(message);
  };

  oodFree = function() {
    return alert("Oods are free!");
  };

}).call(this);