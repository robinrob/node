#!/usr/bin/env node

var _ = require('lodash')

var a = { b: { val: 2 } }

var result = _.get(a, 'b.val')

console.log('result: ' + JSON.stringify(result, null, '\t'))

var a = {}

var result = _.get(a, 'b.val', 0)

console.log('result: ' + JSON.stringify(result, null, '\t'))

var a = {'one': 1, 'two': 2}

var result = _.get(a, 0)

console.log('result: ' + JSON.stringify(result, null, '\t'))
