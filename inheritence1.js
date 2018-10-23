//@ts-check
'use strict'

function Rectangle(length, width) {
    this._length = length;
    this._width = width;
}

Rectangle.prototype.toString = function () {
    return "[Rectangle " + this.length + "x" + this.width + "]";
}

Object.defineProperty(Rectangle.prototype, "length", {
    get: function () {
        return this._length;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Rectangle.prototype, "width", {
    get: function () {
        return this._width;
    },
    enumerable: true,
    configurable: true
});

//---   ---   ---   ---

function Square(size){
    Rectangle.call(this, size, size);
}

Square.prototype = Object.create(
    Rectangle.prototype, {
        constructor: {
            configurable: true,
            enumerable: true,
            value: Square,
            writable: true

        }
    });

Square.prototype.toString = function(){
    return "[Square " + this.length + "x" + this.width + "]";
}

//---   ---   ---   ---

let square1 = new Square(2.5);
console.log(square1.toString());

//---   ---   ---   ---

let rectangle1 = new Rectangle(8.5, 3.5);
console.log(rectangle1.toString());
console.log('length: ' + rectangle1.length);
console.log('width: ' + rectangle1.width);
