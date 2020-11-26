"use strict";
(function () {
    var Avenger = /** @class */ (function () {
        //  name:string;
        //  power:string;
        //  realName:string;
        // team? :string;
        // constructor(name:string,power:string,realName:string){
        //     this.name = name;
        //     this.power = power;
        //     this.realName = realName;
        // }
        function Avenger(name, power, realName, team, dead) {
            if (dead === void 0) { dead = false; }
            this.name = name;
            this.power = power;
            this.realName = realName;
            this.team = team;
            this.dead = dead;
        }
        return Avenger;
    }());
    var antman = new Avenger("antman", "Super ant", "IDK");
    console.log(antman);
})();
