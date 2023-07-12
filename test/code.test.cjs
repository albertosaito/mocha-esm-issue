// CommonJS module

const assert = require('assert');

describe('MyFunction', () => {
  it('should work', async () => {
    const myF = (await import('../src/code.js')).default;
    const result = myF();
    assert(result === 42)
  });
});