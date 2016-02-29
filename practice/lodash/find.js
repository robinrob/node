#!/usr/bin/env node

var _ = require('lodash')

var a = [{val: 1}, {val: 2}, {val: 2}]

var res = _.find(a, function(item) {
    return item.val == 2
})

console.log("res: " + JSON.stringify(res))

var a = {val: 1, val: 2}

_.find(a, function(item) {
  console.log('item: ' + JSON.stringify(item, null, '\t'))
})


