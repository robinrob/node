#!/usr/bin/env node

var _ = require('lodash')

var res = _.isNil('')

console.log("res: " + res)

var res = _.isNil('1')

console.log("res: " + res)

var res = _.isNil(2)

console.log("res: " + res)

var blah = {}
var res = _.isNil(blah.nothing)

console.log("res: " + res)