//String
// o
let cadena: string | number = "CRisthian Fonseca";
cadena =2 ;

//Number

let numero: number = 3;

//Booleano
let boleano: boolean = true;

//Any
let cualquiera: any = "Hola"

//Arrays
var lenguages: Array<string> = ["Hola", "Java", "python",];
var lan: Array<any> = ["Hola", "Java", "python", 3];

let pop: number[] = [3, 4, 3, 123.12, 3];

console.log(cadena);

// nuevo type de dato
type letrasonumeros = string | number;

let n : letrasonumeros = 12;
console.log(n);

// let vs var
var n1= 10;
var n2 = 12;

if(n1==10){
    let n1 = 44;
    var n2 = 55;

    console.log(n1,n2);
}
console.log(n1,n2);
