#!/usr/bin/env node

var res = 'robin'.search('rob')

console.log("result: " + res)

res = 'robin'.search('bin')

console.log("result: " + res)

res = 'robin'.search('smi')

console.log("result: " + res)

res = 'Robin'.toLowerCase().search('ROB'.toLowerCase())

console.log("result: " + res)
