#!/usr/bin/env node

var _ = require('lodash')

var a = [{val2: 1}, {val: 2}, {val2: 3}]

var res = _.find(a, function(item) {
    return item.val == 2
})

console.log("res: " + JSON.stringify(res))