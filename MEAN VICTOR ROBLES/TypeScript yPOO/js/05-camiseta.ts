//class (molde del object)
class Camiseta{
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

var  camiseta = new Camiseta("rojo","shirt","nike","12",300);

camiseta.setColor("white")


console.log(camiseta)
