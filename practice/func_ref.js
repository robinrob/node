#!/usr/bin/env node


var func = function() { console.log("WANK") }

console.log('func: ' + JSON.stringify(func, null, '\t'))

func()

var func2 = function() {return function(){console.log('FUCK')} }

func2()()
