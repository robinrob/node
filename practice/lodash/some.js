#!/usr/bin/env node

var _ = require('lodash')


var res = _.some([1,2,3], function(num) {
    return num == 2
})

console.log('res: ' + res)

var res = _.some([1,2,3], function(num) {
    return num == 4
})

console.log('res: ' + res)