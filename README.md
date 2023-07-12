# mocha-esm-issue

Install dependencies `npm install`; and run `npm test` You should get this error:
```
 ✨ Alberto> 

> test
> mocha

  MyFunction
    1) should work

  0 passing (9ms)
  1 failing

  1) MyFunction
       should work:
     /Users/saitoa/lifion-code-base/~saitoa/mocha-esm-issue/src/code.js:7
  if (fs?.chmodSync) {
         ^

SyntaxError: Invalid or unexpected token
      at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)

```

This is because esm module loader does not support a few Node.js features, including __optional chaining__ and __nullish coalescing__
See: https://github.com/standard-things/esm/issues/866

Note that other branches in this repo provide potential solutions


Cheers,
Alberto