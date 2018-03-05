#!/usr/bin/env node

"use strict"

var _ = require('lodash')

var params = {
	"resource": "business_cases",
	"action": "edit",
	"reverse": false,
	"element": {
		"0": {},
		"context": {},
		"length": 1
	}
}

var func = function(params) {
	var keys = Object.keys(params)
	console.log('keys: ' + JSON.stringify(keys, null, '\t'))

	var res = _.includes(keys, 'value')
	console.log('res: ' + res)
}

func(params)

