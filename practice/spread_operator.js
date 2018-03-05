#!/usr/bin/env node

"use strict"

let args = [2, 3, 4]

let func = function(one, two, three) {
    console.log('one: ' + one)
    console.log('two: ' + two)
    console.log('three: ' + three)
}

func(1, ...args, 5)
console.log()

func = function(one, two, three, four, five) {
    console.log('one: ' + one)
    console.log('two: ' + two)
    console.log('three: ' + three)
    console.log('four: ' + four)
    console.log('five: ' + five)
}


func(1, ...args, 5)
console.log()

let a = [1, ...args, 5]

console.log('a: ' + a)
console.log()

func = function(one, two, ...threefourfive) {
    console.log('one: ' + one)
    console.log('two: ' + two)
    console.log('threefourfive: ' + threefourfive)
}

func(1, 2, 3, 4, 5)


