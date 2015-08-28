#!/usr/bin/env node

var _ = require('lodash')

var a = [{val: 1}, {val: 2}, {val: 3}]

_.remove(a, function(item) {
    return item.val == 2
})

console.log("a: " + JSON.stringify(a))

var a = {
  one: 1,
  two: 2
}

console.log("a: " + JSON.stringify(a))

_.remove(a, function(obj) {
  return obj[0] == 'one'
})

console.log("a: " + JSON.stringify(a))
