#!/usr/bin/env node

var _ = require('lodash')

var a = { b: { val: 2 } }

console.log('_.parseInt(a.val): ' + JSON.stringify(_.parseInt(a.b.val), null, '\t'))

var a = {}

console.log('_.parseInt(a.val): ' + JSON.stringify(_.parseInt(a.b.val), null, '\t'))

