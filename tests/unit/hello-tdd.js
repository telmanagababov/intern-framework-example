define(function (require) {
  var tdd = require('intern!tdd'),
      assert = require('intern/chai!assert'),
      hello = require('app/hello');

  tdd.suite('hello-tdd', function () {

    tdd.test('greet', function () {
      assert.strictEqual(hello.greet('Murray'), 'Hello, Murray!',
          'hello.greet should return a greeting for the person named in the first argument');
      assert.strictEqual(hello.greet(), 'Hello, world!',
          'hello.greet with no arguments should return a greeting to "world"');
    });
  });
});