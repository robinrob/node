#!/usr/bin/env node

var _ = require('lodash')

var a = [[1,2], [3,4], [5,6]]

var res = _.reduce(a, function(result, value) {
    result = _.concat(result, value)
    return result
}, [])

console.log('res: ' + JSON.stringify(res, null, '\t'))

var a = {
    children: [
        {
            name: 'Bob',
            children: [
                {
                    name: 'Brown',
                    children: [
                        {
                            name: 'No'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Snake',
            children: [
                {
                    name: 'Doc'
                }
            ]
        }
    ]
}

var reduce_tree = function(parents, children_attr, func, result) {
    _.forEach(parents, function(parent) {
        result = func(result, parent)

        if (children_attr in parent) {
            result = reduce_tree(parent[children_attr], children_attr, func, result)
        }
    })

    return result
}

var flatten_tree = function(tree, children_attr) {
    return reduce_tree(tree, children_attr, function(nodes, node) {
        return _.concat(nodes, node)
    }, [])
}

res = flatten_tree(a.children, 'children')
console.log('res: ' + JSON.stringify(res, null, '\t'))

var count_nodes = function(tree, children_attr) {
    return reduce_tree(tree, children_attr, function(sum, node) {
        sum += 1
        return sum
    }, 0)
}

res = count_nodes(a.children, 'children')
console.log('res: ' + JSON.stringify(res, null, '\t'))

var find_in_tree = function(tree, children_attr, search) {
    var result = reduce_tree(tree, children_attr, function(result, node) {
        var matched = _.every(
            _.map(Object.keys(search), function(key) {
                return node[key] == search[key]
            })
        )
        if (matched) {
            result.push(node)
        }
        return result
    }, [])

    if (_.size(result) > 0) {
        return result[0]
    } else {
        return null
    }
}

res = find_in_tree(a.children, 'children', {name: 'Doc'})
console.log('res: ' + JSON.stringify(res, null, '\t'))