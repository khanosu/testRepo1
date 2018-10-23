"use strict";
    function Friend() {
        this._name = 'Foo';
    }

    Object.defineProperty(Friend.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });

var friend1 = new Friend();
console.log(friend1.name);