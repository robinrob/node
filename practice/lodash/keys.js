#!/usr/bin/env node

var _ = require('lodash')

var a = {'one': 1, 'two': 2}


var keys = _.keys(a)

console.log('keys: ' + JSON.stringify(keys, null, '\t'))
