
import {Camiseta} from './06-exportCamisa';

class Main{
    constructor(){

        console.log("app Cargada");
    }
    getCamiseta(){

    return new Camiseta("rojo","shirt","nike","12",300);
    }
    
}
var main = new Main();