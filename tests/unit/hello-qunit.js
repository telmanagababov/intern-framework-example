define(function (require) {
  var QUnit = require('intern!qunit'),
    hello = require('app/hello');

  QUnit.module('hello-qunit');
  QUnit.test('greet', function (assert) {
    assert.strictEqual(hello.greet('Murray'), 'Hello, Murray!',
        'hello.greet should return a greeting for the person named in the first argument');
    assert.strictEqual(hello.greet(), 'Hello, world!',
        'hello.greet with no arguments should return a greeting to "world"');
  });
});