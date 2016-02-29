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

res = _.findIndex(a, function(el) {
  return el.id == 2
})

console.log("res: " + JSON.stringify(res))

var a = [1, 2, 3]

res = _.findIndex(a, 3)

console.log("res: " + JSON.stringify(res))