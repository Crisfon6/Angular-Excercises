var Camisete = /** @class */ (function () {
    //Methods (functions or actions of object)
    function Camisete(color, model, mark, size, pricing) {
        this.color = color;
        this.model = model;
        this.mark = mark;
        this.size = size;
        this.pricing = pricing;
    }
    Camisete.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisete.prototype.getColor = function () {
        return this.color;
    };
    return Camisete;
}());
var CamiseteObj = new Camisete("rojo", "shirt", "nike", "12", 30);
console.log(CamiseteObj);
