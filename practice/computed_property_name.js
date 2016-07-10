#!/usr/bin/env node

"use strict"

var name="Robin"

var a = {
  [name]: 29
}

console.log('a: ' + JSON.stringify(a, null, '\t'))
