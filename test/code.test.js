// CommonJS module
require = require('esm')(module);
const assert = require('assert');

describe('MyFunction', () => {
  it('should work', () => {
    const { default: myF } = require('../src/code');
    const result = myF();
    assert(result === 42)
  });
});