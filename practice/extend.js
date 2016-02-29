#!/usr/bin/env node

a = [1, 2, 3]
console.log('a: ' + JSON.stringify(a, null, '\t'))

b = [4, 5, 6]
console.log('b: ' + JSON.stringify(b, null, '\t'))

a.push.apply(a, b)

console.log('a: ' + JSON.stringify(a, null, '\t'))


