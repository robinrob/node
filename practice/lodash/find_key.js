#!/usr/bin/env node

var _ = require('lodash')

var a = {
    one: 1,
    two: 2
}

console.log("a: " + JSON.stringify(a))

res = _.findKey(a, 'one')

console.log("res: " + JSON.stringify(res))
