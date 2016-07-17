#!/usr/bin/env node

"use strict"


function *foo() {
    console.log( "`*foo()` starting" );
    yield 3;
    yield 4;
    console.log( "`*foo()` finished" );
}

function *bar() {
    yield 1;
    yield 2;
    yield *foo();   // `yield`-delegation!
    yield 5;
}

var it = bar();

console.log(it.next().value)    // 1
console.log(it.next().value)    // 2
console.log(it.next().value)    // `*foo()` starting
console.log(it.next().value)    // 4
console.log(it.next().value)    // `*foo()` finished

console.log()


function *foo() {
    console.log( "inside `*foo()`:", yield "B" );

    console.log( "inside `*foo()`:", yield "C" );

    return "D";
}

function *bar() {
    console.log( "inside `*bar()`:", yield "A" );

    // `yield`-delegation!
    console.log( "inside `*bar()`:", yield *foo() );

    console.log( "inside `*bar()`:", yield "E" );

    return "F";
}

var it = bar();

console.log( "outside:", it.next().value );
// outside: A

console.log( "outside:", it.next( 1 ).value );
// inside `*bar()`: 1
// outside: B

console.log( "outside:", it.next( 2 ).value );
// inside `*foo()`: 2
// outside: C

console.log( "outside:", it.next( 3 ).value );
// inside `*foo()`: 3
// inside `*bar()`: D
// outside: E

console.log( "outside:", it.next( 4 ).value );
// inside `*bar()`: 4
// outside: F