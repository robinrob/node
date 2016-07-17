#!/usr/bin/env node

"use strict"

function *gen() {
    console.log("Running gen1 ...")
}

let it = gen()

it.next()
it.next()
it.next()

console.log()


function *gen2() {
    console.log("Running gen2 ...")
    yield
    console.log("Hello from gen2")
    yield
    console.log("Hello from gen2")
    yield
}

it = gen2()

it.next()
it.next()
it.next()

console.log()


function *gen3() {
    console.log("Running gen3 ...")
    for (let i=0; i<5; ++i) {
    yield "Hello from gen3"
    }
}

it = gen3()

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

console.log()


function *gen4(x) {
    // The generator gen4 is paused during the assignment expression!
    // So the value for x passed in (when the iterator for the generator was
    // constructed), is multiplied with the argument passed in to a next call
    // (the value for yield).
    console.log("Running gen4 ...")
    var y = x * (yield);
    console.log(y)
    y = x * (yield);
    console.log(y)
    y = x * (yield);
    console.log(y)
}

it = gen4(6);

it.next()
it.next(7)
it.next(8)
it.next(9)

console.log()


function *gen5(x) {
    console.log("Running gen5 ...")
    var y = x * (yield "Hello");    // <-- yield a value!
    return y;
}

it = gen5(6)

// Yield returns "Hello
console.log(it.next().value)
// The generator is still paused at the previous yield expression, and when
// there is a return statement in the generator, this returns the next value by
// passing the argument into the paused yield. If there is no return, then
// undefined is returned.
console.log(it.next(7).value)

console.log()


function *gen6(x) {
    console.log("Running gen6 ...")
    var y = x * (yield "Pass first argument");    // <-- yield a value!
    yield y

    y = x * (yield "Pass second argument");    // <-- yield a value!
    return y;
}

it = gen6(6)

console.log(it.next().value)
console.log(it.next(7).value)
console.log(it.next().value)
console.log(it.next(8).value)
console.log()

// This is how to write synchronous-looking code and avoid callbacks when making
// asynchronous calls:
function foo(x,y) {
    ajax(
        "http://some.url.1/?x=" + x + "&y=" + y,
        function(err,data){
            if (err) {
                // throw an error into `*main()`
                it.throw( err );
            }
            else {
                // resume `*main()` with received `data`
                it.next( data );
            }
        }
    );
}

function *main() {
    try {
        var text = yield foo( 11, 31 );
        console.log( text );
    }
    catch (err) {
        console.error( err );
    }
}

it = main();

// start it all up!
// it.next();
