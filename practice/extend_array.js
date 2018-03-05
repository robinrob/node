#!/usr/bin/env node

"use strict"

let a = [1, 2, 3]

let b = [4, 5, 6]

a.push.apply(a, b)
console.log('a: ' + a)
