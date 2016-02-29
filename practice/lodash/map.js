#!/usr/bin/env node

var _ = require('lodash')

var a = [
    {
        id: 1,
        'name': 'dog'
    },
    {
        id: 2,
        'name': 'bollocks'
    },
]

console.log("a: " + JSON.stringify(a))

res = _.map(a, 'name')

console.log("a: " + JSON.stringify(res))

