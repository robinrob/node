#!/usr/bin/env node

var _ = require('lodash')

var a = _.concat(
    [1,2,3],
    [4,5,6],
    [7,8,9]
)

console.log('a: ' + JSON.stringify(a, null, '\t'))