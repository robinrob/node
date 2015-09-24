#!/usr/bin/env node

var _ = require('lodash')

var a = { b: { val: function() { return 2 } } }

var result = _.result(a, 'b.val')

console.log('result: ' + JSON.stringify(result, null, '\t'))

var a = {}

var result = _.result(a, 'b.val', 0)

console.log('result: ' + JSON.stringify(result, null, '\t'))
