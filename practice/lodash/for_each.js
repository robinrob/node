#!/usr/bin/env node

var _ = require('lodash')


a = {'one': 1, 'two': 2}

_.forEach(a, function(val, key) {
  console.log('key: ' + JSON.stringify(key, null, '\t'))
  console.log('val: ' + JSON.stringify(val, null, '\t'))
})

a = {1: 'one', 2: 'two'}

_.forEach(a, function(val, key) {
  console.log('key: ' + JSON.stringify(key, null, '\t'))
  console.log('val: ' + JSON.stringify(val, null, '\t'))
})

a = _.forEach([1,2,3], function(val) { return val })

console.log('a: ' + JSON.stringify(a, null, '\t'))