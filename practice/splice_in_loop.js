#!/usr/bin/env node


arr = [1, 2, 3, 4, 5]

arr.forEach(function(elem, index) {
  if (elem == 2) {
    arr.splice(index, 1)
  }
})

console.log("arr: " + arr)
