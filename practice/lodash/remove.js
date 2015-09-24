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

a = [{name: 'one', data: [null, null]}, {name: 'two', data: [0, 0]}, {name: 'three', data: [1, 2, 3]}]

console.log("a: " + JSON.stringify(a))

_.remove(a, function(obj) {
  return _.sum(obj.data) == 0
})

console.log("a: " + JSON.stringify(a))

a = [{name: 'one', data: [[null, null], [null, null]]}, {name: 'two', data: [[0, 0], [0, 0]]}, {name: 'three', data: [[1, 2, 3], [1, 2, 3]]}]

console.log("a: " + JSON.stringify(a))

_.forEach(a, function(series) {
  _.remove(series.data, function(pair) {
    return _.sum(pair) == 0
  })
})
_.remove(a, function(series) {
  return series.data.length == 0
})

console.log("a: " + JSON.stringify(a))
