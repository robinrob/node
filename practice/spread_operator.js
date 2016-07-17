#!/usr/bin/env node

"use strict"

let func = function(one, two, three, four, five) {
    console.log('one: ' + one)
    console.log('two: ' + two)
    console.log('three: ' + three)
    console.log('four: ' + four)
    console.log('five: ' + five)
}

let args = [2, 3, 4]

func(1, ...args, 5)