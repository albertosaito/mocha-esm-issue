// ECMAScript Module

import * as fs from 'fs';

// import JSON (1): Using regular import/assert syntax (NOTE THIS IS STILL EXPERIMENTAL)
import * as p from '../package.json' assert  { type: 'json' };
// import JSON (2)
const p2 = await import('../package.json', { assert: { type: 'json' } });
// "import & parse" JSON (3)
import { readFile } from 'fs/promises';
const p3 = JSON.parse(await readFile(new URL('../package.json', import.meta.url)));
// createRequire JSON (4)
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const p4 = require("../package.json");

console.log(p.default.name, '===', p2.default.name, '===', p3.name, '===', p4.name);

export default function myFunction() {
  // Use optional chaining
  if (fs?.chmodSync) {
    console.log('Optional chaining worked');
    return 42;
  }
  return undefined;
}