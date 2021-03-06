#!/usr/bin/env node

/* Constructor functions can be avoided completely - just use objects. */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* Object definitions */

function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

var ship = {
    manufacture: function(shields) {
        var newShip = Object.create(this)
        newShip.shields = shields
        return newShip
    },
    health: 100,
    shields: 50,
    guns: [{
        damage: 20,
        speed: 5
    },{
        damage: 5,
        speed: 9000
    }],
    fire: function() {
        console.log('PEW PEW')
    }
}

var newShipModel = deepCopy(ship)
newShipModel.health = 200
newShipModel.shields = 100
newShipModel.fire = function() {
    console.log('TRIPLE PEW!!!')
}
/* -------------------------------------------------- */


var oldShip = ship.manufacture(100)
var newShip = newShipModel.manufacture(150)

cyan("oldShip:")
logo(oldShip)
log()

cyan("newShip:")
logo(newShip)
log()

log(JSON.stringify(oldShip))