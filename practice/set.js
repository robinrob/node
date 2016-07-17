#!/usr/bin/env node

"use strict"

let list = [1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 7]
console.log('list: ' + list)

let set = Array.from(new Set(list))
console.log('set: ' + set)
