#!/usr/bin/env node

var _ = require('lodash')


var result = _.includes(['robin', 'smith'], 'smith')

console.log('result: ' + JSON.stringify(result, null, '\t'))

var result = _.includes(['robin', 'smith'], 'bitch')

console.log('result: ' + JSON.stringify(result, null, '\t'))

var result = _.includes('robin smith', 'smith')

console.log('result: ' + JSON.stringify(result, null, '\t'))

