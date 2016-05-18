define(function (require) {
  var bdd = require('intern!bdd'),
      assert = require('intern/chai!assert'),
      hello = require('app/hello');

  bdd.describe('hello-bdd', function () {

    bdd.it('hello.greet should return a greeting for the person named in the first argument', function () {
        assert.strictEqual(hello.greet('Murray'), 'Hello, Murray!');
    });

    bdd.it('hello.greet with no arguments should return a greeting to "world"', function () {
        assert.strictEqual(hello.greet(), 'Hello, world!');
    });
  });
});