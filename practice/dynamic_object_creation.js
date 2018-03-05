#!/usr/bin/env node

"use strict"

var two = 2

// Normally the two is interpreted as the string 'two' ...
let a = {
  'one': 1,
  two: 2
}

console.log('a: ' + JSON.stringify(a, null, '\t'))
console.log()

// But with brackets around it, it's evaluated first
a = {
  'one': 1,
  [two]: 2
}

console.log('a: ' + JSON.stringify(a, null, '\t'))
