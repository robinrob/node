#!/usr/bin/env node

"use strict"

let me = ['Robin', 29]

let [name, age] = me
console.log(name, age)
console.log()


let today = {m: 12, d: 4, y: 2014}

let {m: month, d: day} = today

console.log(month, day)
console.log()


// Can be combined with property expressions ...
let varname = 'a'

let { [varname]: b } = {a: 'what'}
console.log('b: ' + b)
console.log()


// Map one object to another:
let o1 = {a: 1, b: 2, c: 3}, o2 = {};

( { a: o2.x, b: o2.y, c: o2.z } = o1 )

console.log('o2: ' + JSON.stringify(o2, null, '\t'))
console.log()


// Map an object to an array
o1 = {a: 1, b: 2, c: 3}
let a2 = [];
f
( {a: a2[0], b: a2[1], c: a2[2] } = o1 );

console.log('a2: ' + a2)
console.log()


// Map an array to an object
let a1 = [1, 2, 3]
o2 = {};

[ o2.a, o2.b, o2.c ] = a1

console.log('o2: ' + JSON.stringify(o2, null, '\t'))
console.log()


// Swap two variables without using a temporary variable!
var x = 10, y = 20;

[ y, x ] = [ x, y ];

console.log( x, y );