# mocha-esm-issue

Install dependencies `npm install`; and run `npm test` You should get this:
```
 ✨ Alberto> 

> test
> mocha

  MyFunction
Optional chaining worked
    ✔ should work


  1 passing (4ms)
```
This would require to:

1. Change ALL ESM requires in mocha tests into dynamic imports (see code.test.js:7)
2. Rename all ESM modules to `.mjs` to make them explicit ESM modules

Cheers, Alberto