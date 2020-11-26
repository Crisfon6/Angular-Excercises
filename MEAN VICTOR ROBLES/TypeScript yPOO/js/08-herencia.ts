//interfaz
interface CamisetoBase{
    setColor(color);
    getColor();

}

//class father
class Camiseto implements CamisetoBase{
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
class Sudadera extends Camiseto{
    public capucha: boolean;
    setCapucha(capucha){
        this.capucha= capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}
var suda = new Sudadera("rojo","shirt","nike","12",30);
console.log(suda.getCapucha());
 
console.log(suda);
