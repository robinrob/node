#!/usr/bin/env node

var _ = require('lodash')

var a = {a: 'one', b: 'two'}
var b = {c: 'three', d: 'four'}

var res = _.assignIn({}, a, b)
console.log('res: ' + JSON.stringify(res, null, '\t'))

var Funcs = function() {
    this.hello = function() { console.log('PRICK') }
}

var Others = function() {
    this.bye = function() { console.log('BYE') }
}

res = _.assignIn({}, new Funcs, new Others)
console.log('res: ' + JSON.stringify(res, null, '\t'))

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

res = _.assignIn({ 'a': 0 }, new Foo, new Bar);
console.log('res: ' + JSON.stringify(res, null, '\t'))


var funcs = {
    hey: function() { console.log('HEY') }
}

var MoreFuncs = function() {
    var that = this
    _.forEach(Object.keys(funcs), function(key) {
        that[key] = funcs[key]
    })
}

res = _.assignIn({}, new Funcs, new Others, new MoreFuncs, _)
console.log('res: ' + JSON.stringify(res, null, '\t'))
res.hello()
res.bye()
res.hey()
var res2 = res.map([1,2,3])
console.log('res2: ' + JSON.stringify(res2, null, '\t'))