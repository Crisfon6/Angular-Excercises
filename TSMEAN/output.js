console.log('hello world');
//types 
var myString = "hello world";
myString = 22 + "";
var myNumber = 22;
var myBool = true || false;
var myAny = "hello";
myAny = false;
document.write(myBool.toString());
//Arrays
var StringArray = ["", "", ""];
StringArray = [true, 2, 4];
var otherString = ["hoas", "asd", "asa"];
var numberArray = [1, 23, 45,];
//tuple
//define the form data
var strNumTuple;
strNumTuple = ["hello", 4];
strNumTuple = ["hello", 3];
strNumTuple = ["World", 4];
// void, undefined, null
var cristhian = 3.14;
var myVoid = undefined;
var myNull = null;
document.write(typeof (myVoid));
//functions
function get_sum(n1, n2) {
    return n1 + n2;
}
var mySum = function (n1, n2) {
    if (typeof (n1) == 'string') {
        n1 = parseInt(n1);
    }
    if (typeof (n2) == 'string') {
        n2 = parseInt(n2);
    }
    return n1 + n2;
};
function getName(fN, lN) {
    if (lN == undefined) {
        return "hola " + fN;
    }
    return "hola " + fN + " " + lN;
}
function myVoidFunction() {
    return;
}
document.write(getName("cristhian"));
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: 'Earn money',
    text: 'be happy'
});
var myTodo = { title: 'Eat dinner', text: 'lorem' };
//Class
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    return User;
}());
var cris = new User("jhon", "c", 3);
console.log(cris.register());
