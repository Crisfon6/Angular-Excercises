"use strict";
exports.__esModule = true;
var _06_exportCamisa_1 = require("./06-exportCamisa");
var Main = /** @class */ (function () {
    function Main() {
        console.log("app Cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new _06_exportCamisa_1.Camiseta("rojo", "shirt", "nike", "12", 300);
    };
    return Main;
}());
var main = new Main();
