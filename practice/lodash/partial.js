#!/usr/bin/env node

var _ = require('lodash')

var a = {
  one: 1,
  two: 2
}


var result = _.partial(Math.max, 3)(5)

console.log('result: ' + JSON.stringify(result, null, '\t'))


result = _.map([1,2,3,4,5], function(arg) {
  return _.partial(Math.max, 3)(arg)
})

console.log('result: ' + JSON.stringify(result, null, '\t'))


_.map([1,2,3,4,5], function(arg1, arg2, arg3) {
  console.log('arg1: ' + JSON.stringify(arg1, null, '\t'))
})
