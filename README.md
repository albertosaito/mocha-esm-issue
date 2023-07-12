# mocha-esm-issue

Install dependencies `npm install`; and run `npm test` You should get this error:
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

1. Include `@babel/register` and `@babel/preset-env` dev-dependencies and change test script (See: `package.json`)
2. Add `.babelrc` config file
3. Remove `esm` references

Cheers, Alberto