#!/usr/bin/env node

var _ = require('lodash')


var result = _.isEqual(1, '1')

console.log('result: ' + JSON.stringify(result, null, '\t'))

result = _.isEqual(1, 1)

console.log('result: ' + JSON.stringify(result, null, '\t'))
