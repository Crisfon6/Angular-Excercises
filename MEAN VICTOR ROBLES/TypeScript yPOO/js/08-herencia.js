var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class father
var Camiseto = /** @class */ (function () {
    //Methods (functions or actions of object)
    function Camiseto(color, model, mark, size, pricing) {
        this.color = color;
        this.model = model;
        this.mark = mark;
        this.size = size;
        this.pricing = pricing;
    }
    Camiseto.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseto.prototype.getColor = function () {
        return this.color;
    };
    return Camiseto;
}());
//Class hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseto));
var suda = new Sudadera("rojo", "shirt", "nike", "12", 30);
console.log(suda.getCapucha());
console.log(suda);
