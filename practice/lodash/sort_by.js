#!/usr/bin/env node

var _ = require('lodash')


arr = [{name: 'Robin'}, {name: 'smith'}, {name: 'Zulu'}, {name: 'alpha'}]

console.log("arr: " + JSON.stringify(arr, null, '\t'))

arr = _.sortBy(arr, 'name')

console.log("arr: " + JSON.stringify(arr, null, '\t'))

arr = _.sortBy(arr, function(elem) {
  return elem.name.toLowerCase()
})

console.log("arr: " + JSON.stringify(arr, null, '\t'))
