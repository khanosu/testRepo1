"use strict";
var Friend1 = /** @class */ (function () {
    function Friend1() {
        this._name = 'Foo';
    }
    Object.defineProperty(Friend1.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Friend1;
}());
var friend2 = new Friend1();
console.log(friend2.name);