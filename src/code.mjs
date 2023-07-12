// ECMAScript Module

import * as fs from 'fs';

export default function myFunction() {
  // Use optional chaining
  if (fs?.chmodSync) {
    console.log('Optional chaining worked');
    return 42;
  }
  return undefined;
}