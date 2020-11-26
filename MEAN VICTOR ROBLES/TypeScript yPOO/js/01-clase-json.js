
window.addEventListener('load',()=>{
   
    
    
console.log(bici);
bici.cambiaColor("azul");

});

var bici ={
    color: "rojo",
    model: "BMX",
    frenos: "Disk",
    velocidadMaxima: "60km",
    cambiaColor: function(nuevo_color){
    this.color= nuevo_color;
    console.log(this);
    
    }
}