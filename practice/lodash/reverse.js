#!/usr/bin/env node

var _ = require('lodash')

var a = [1, 2, 3, 4, 5]

var res = _.reverse(a)

console.log("res: " + JSON.stringify(res))