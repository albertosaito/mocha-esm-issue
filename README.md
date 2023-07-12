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
1. Make the project into a ESM module (type: module in package.json)
2. Rename unit tests as `.cjs` to make them CommonJS files
3. Change ALL ESM requires in mocha tests into dynamic imports (see `code.test.cjs:7`)


Cheers,
Alberto