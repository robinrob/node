#!/usr/bin/env node

var _ = require('lodash')

var a = [{val: 1}, {val: 2}, {val: 3}]

var res = _.find(a, function(item) {
    return item.val == 2
})

console.log("res: " + JSON.stringify(res))
console.log()

_.find(a, function(item) {
  console.log('item: ' + JSON.stringify(item, null, '\t'))
})
console.log()

res = _.find(a, {'val': 2})
console.log('res: ' + JSON.stringify(res, null, '\t'))
console.log()

res = _.find(a, ['val', 2])
console.log('res: ' + JSON.stringify(res, null, '\t'))

a = [1,2,3,4,5]

res = _.find(a, 4)

console.log('res: ' + JSON.stringify(res, null, '\t'))

res = _.find(a, function(num) {
    return num == 4
})

console.log('res: ' + JSON.stringify(res, null, '\t'))