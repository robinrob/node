#!/usr/bin/env node

var _ = require('lodash')

a = [1.1, 2.2, 3]

res = _.sum(a)

console.log('res: ' + JSON.stringify(res, null, '\t'))
