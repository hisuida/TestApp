const chai = require('chai');

(function(global, $, mocha) {
  mocha.setup('bdd');
  mocha.globals([
    '_',
    'jQuery*'
  ]);
  mocha.timeout(3000);

  global.expect = chai.expect;
})(window, window.jQuery, window.mocha);
