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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo" + logo);
        };
    };
}
//class father
var Camiseti = /** @class */ (function () {
    //Methods (functions or actions of object)
    function Camiseti(color, model, mark, size, pricing) {
        this.color = color;
        this.model = model;
        this.mark = mark;
        this.size = size;
        this.pricing = pricing;
    }
    Camiseti.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseti.prototype.getColor = function () {
        return this.color;
    };
    Camiseti = __decorate([
        estampar("Gucci Gang")
    ], Camiseti);
    return Camiseti;
}());
//Class hija
var Sudadero = /** @class */ (function (_super) {
    __extends(Sudadero, _super);
    function Sudadero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadero.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadero.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadero;
}(Camiseti));
var suda = new Camiseti("rojo", "shirt", "nike", "12", 30);
// console.log(suda.getCapucha());
suda.estampacion();
// console.log(suda);
