#!/usr/bin/env node

"use strict"

// Manual iterator. This implements both the iterable AND interator interfaces -
// because it has a next() method and an interator() method which returns an
// iterator for iterating over itself.
var iterable = (function(){
    var nextVal, done=false

    return {
        // needed for `for..of` loops
        [Symbol.iterator]: function(){ return this; },

        // standard iterator interface method
        next: function(){
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }

            if (nextVal > 500) {
              done = true
            }

            return { done:done, value:nextVal };
        }
    };
})();


// For..of automaticlaly calls next() on an iterator and checks the value of
// done.
for (var v of iterable) {
  console.log('v: ' + v)
}
console.log()


// Built-in data structures like arrays have default iterators
for (var v of [1, 2, 3, 4, 5]) {
  console.log('v: ' + v)
}
console.log()


var a = [1, 2, 3, 4, 5]
var it = a[Symbol.iterator]()

console.log(it.next())
console.log()


// Iterator/iterable implemented using a generator:
function *something() {
    var nextVal;

    while (true) {
        if (nextVal === undefined) {
            nextVal = 1;
        }
        else {
            nextVal = (3 * nextVal) + 6;
        }

        yield nextVal;
    }
}

// The value returned from initialisation a generator is also
// both an iterable and an iterator. When break is called in a for..of loop,
// a signal is sent to the iterator to stop iterating, so the generator will
// not be left in a 'suspended' state at the previous yield expression.
var it = something()
for (var v of it) {
  if (v > 500) {
    break
  }

  console.log('v: ' + v)
}
