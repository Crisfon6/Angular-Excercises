console.log('hello world');

//types 
var myString:string = "hello world";
myString = 22+ "";




var myNumber:number = 22;
var myBool :boolean = true || false;


var myAny : any = "hello";
myAny = false;

document.write(myBool.toString());
//Arrays
var StringArray:any[] = ["","",""];
StringArray = [true,2,4]


var otherString: string[] =["hoas","asd","asa"]
var numberArray: number[]= [1,23,45,]

//tuple
//define the form data
var strNumTuple :[string,number];
strNumTuple = ["hello",4]
strNumTuple = ["hello",3]
strNumTuple = ["World",4]

// void, undefined, null
const cristhian:number = 3.14;
let myVoid :void = undefined;
let myNull: null = null
document.write(typeof(myVoid))

//functions

function get_sum(n1:number,n2:number):number{
    return n1+n2
}

let mySum = function(
        n1:number | string,
        n2:number | string,):number{
    if(typeof(n1)=='string'){
        n1= parseInt(n1)
        
    }
    if(typeof(n2)=='string'){
        n2= parseInt(n2)        
    }
    return n1+n2
}
function getName(fN,lN?){
    if(lN ==undefined){
        return `hola ${fN}`
    }
    return `hola ${fN} ${lN}`
}
function myVoidFunction(): void{
    return;
}
document.write(getName("cristhian"))
//INTERFACES
interface ITodo{
    title: string;
    text:string;
}
function showTodo(todo:ITodo){
    console.log(`${todo.title} - ${todo.text}`)
}
showTodo({
    title: 'Earn money',
    text: 'be happy'
})
let myTodo: ITodo = {title:'Eat dinner',text:'lorem'}


//Class
class User {
    name: string;
    email:string;
    age:number;
    constructor(name,email,age){
        this.name = name
        this.email = email
        this.age = age
    }
    register(){
        console.log(`${this.name} is registered`)
    }
}

var cris = new User("jhon","c",3);

console.log(cris.register())