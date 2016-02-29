#!/usr/bin/env node

var c = function(msg) {
    console.log('C')
    console.log(msg)
}

var b = function(msg) {
    console.log('B')
    return function() {
        c(msg)
    }
}

var a = function() {
    return b('Hello from a')
}

var d = a()
d()