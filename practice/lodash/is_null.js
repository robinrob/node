#!/usr/bin/env node

var _ = require('lodash')

var res = _.isNull('')

console.log("res: " + res)

var res = _.isNull('1')

console.log("res: " + res)

var res = _.isNull(2)

console.log("res: " + res)

var blah = {}
var res = _.isNull(blah.nothing)

console.log("res: " + res)