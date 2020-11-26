"use strict";
exports.__esModule = true;
var Camiseta = /** @class */ (function () {
    //Methods (functions or actions of object)
    function Camiseta(color, model, mark, size, pricing) {
        this.color = color;
        this.model = model;
        this.mark = mark;
        this.size = size;
        this.pricing = pricing;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
