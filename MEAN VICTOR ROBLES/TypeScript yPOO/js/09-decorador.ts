//interfaz
interface CamisetiBase{
    setColor(color);
    getColor();

}


//Decorador
function estampar(logo: string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo"+logo)
        }
    }
}


//class father
@estampar("Gucci Gang")
class Camiseti implements CamisetiBase{
    // Properties (feactures object)
    private color:string;
    private model: string;
    private mark: string;
    private size: string;
    private pricing: number;
    //Methods (functions or actions of object)
    constructor(color,model,mark,size,pricing){
        this.color= color;
        this.model= model;
        this.mark= mark;
        this.size= size;
        this.pricing=pricing;
    }

    public setColor(color){
        this.color= color;
    }
    public getColor(){
        return this.color;
    }
}

//Class hija
class Sudadero extends Camiseti{
    public capucha: boolean;
    setCapucha(capucha){
        this.capucha= capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}
var suda = new Camiseti("rojo","shirt","nike","12",30);
// console.log(suda.getCapucha());
suda.estampacion();
 
// console.log(suda);
