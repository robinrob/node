#!/usr/bin/env node

var _ = require('lodash')

a = {
  'one': {
    show: false
  },
  'two': {
    show: true
  }
}

b = _.filter(a, function(val, key) {
  return val.show == true
})

console.log('b: ' + JSON.stringify(b, null, '\t'))
