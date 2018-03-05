#!/usr/bin/env node

var _ = require('lodash')

var res = _.isEmpty('')

console.log("res: " + res)

var res = _.isEmpty('1')

console.log("res: " + res)

var res = _.isEmpty(2)

console.log("res: " + res)

var res = _.isEmpty(null)

console.log("res: " + res)

var res = _.isEmpty(undefined)

console.log("res: " + res)

var res = _.isEmpty('1')