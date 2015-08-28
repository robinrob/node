#!/usr/bin/env babel-node

require('babel/register');

var evens = [0, 2, 4, 6, 8]
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));


console.log('evens: ' + JSON.stringify(evens, null, '\t'))
console.log('odds: ' + JSON.stringify(odds, null, '\t'))
console.log('nums: ' + JSON.stringify(nums, null, '\t'))
console.log('pairs: ' + JSON.stringify(pairs, null, '\t'))
