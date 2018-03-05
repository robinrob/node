#!/usr/bin/env node

"use strict"


var func = function(x = 1, y = 2) {
    console.log('x: ' + x)
    console.log('y: ' + y)
}

func()
console.log()


func = function(
    x = 1,
    y = function () {
        console.log("Running y-function ...")
        return 2
    }()) {
    console.log('x: ' + x)
    console.log('y: ' + y)
}

func()
console.log()


func = function(x = 1, y = (() => 2)()) {
    console.log('x: ' + x)
    console.log('y: ' + y)
}

func()
