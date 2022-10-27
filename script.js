function makeCoffe(milk,sugar){
    let instruction = "boil water";
    instruction += " Pour into cup ,";
    instruction += ' Add coffe,';
    instruction += ' Add '+milk+' spoons of  milk,';
    instruction += ' Add '+sugar+' spoons of sugar.';
    return instruction

};

// taking input from user
// let a = prompt('A:'),
// b = prompt('B:');
// console.log(makeCoffe(a,b));

// Defining Objects
var person = {
    firstName:'john',
    lastName: 'Doe',
    age:20,
    nationality:'Bangladeshi'
};
// console.log(person.firstName)



// Day-02

let ara1 = ['a','b','c','d','e','f','g','h','i','j','k'],
ara2 = [1,2,3,4,5];

// concatenating two arrays
let l = ara1.concat(ara2)
let l2 = [...ara1,...ara2]
// console.log(l2)

// returns the first position at which a given element appears
// console.log(l2.indexOf('c'))

// reversing an array
// console.log(l2.reverse())

// convert the array element to a string
// console.log(l.toString())

// objects inside of an object (Embedding of Objects)
var employee = {
    employee1:{
    firstName:'john',
    lastName: 'Doe',
    age:20,
    nationality:'German',
    isDrive: function(){return 'Not driving';}
    },
    employee2:{
    firstName:'Saha',
    lastName: 'Sourav',
    age:21,
    nationality:'Bangladeshi',
    isDrive: function(){return 'Driving';}
    }
};

//Member Access - Dot Operator(.)
employee.employee1.age = 27;
// console.log('Driving status of the employee: ' + employee.employee1.isDrive());

// Embedding of arrays and Objects

/*
   object can contain arrays,
   arrays can contain objects
*/
let car = {
    brand : 'BMW',
    color : ['red', 'green', 'blue'],
    engine : {
        size : 2.0,
        fuelType : ['Octane','Patrol',
                    noValves = [2,4,6,8]
                ]
    }
};

// computed member access
// console.log(car.engine.fuelType[0]);

/*
  Member creation, assignment and Deletion
*/

// assignment
car.brand = 'Toyota';

// adding a new key to car object 
car.speed = 160;

// adding a new method to car object
car.raiseSpeed = function(){return 'Speed raise to: '+ car.speed*2 + 'Km/h';};

// member deletion
delete car.engine.size; //outputs a boolean value(true/false)

/*
  18.Array modification
*/

var array = [
    "Sourav",
    93,
    ['Brain Station',23],
    {
        officeLocation : '2 Mohakhali C/A',
        postCode: 'Dhaka-1212',
    },
    {
        isTrainee: true
    },
    function(){return 'They are in industrial attachment program';}
];

array[0] += ' Saha';
array[5] = 'Changed to String';
// array.isDemo = "Yes";

// using some prebuilt method to modify the array
array.shift(); // delete the first element and returns that value
array.pop(); // delete the last element and returns that value

/* unshift() insert elements to beginning and
 returns the length of that array.*/
array.unshift("Sourav","Saha","ID",1704093,[]);

/*
 push(): add elements to end of the array
*/
array.push(20,20.03);

/*
    splice(fromPos,noOfElementsToBeDeleted): remove elements from specified position
*/
array.splice(1,2);

array.splice(1,0,"hello","world",200); // to add element from a specified position

/*
    Callable Objects
*/

// subroutine inside a subroutine
function demo(){
    var fullName = 'Sourav Saha';

    function concat( name ){
        return "Trainee " + name;
    }
    return concat(fullName); // invoking concat function and return
}

// objects as a parameter of a subroutine or function

function Name( fullName ){
    return fullName.firstName + fullName.lastName;
}
console.log(Name({
    firstName:'Sourav',
    lastName: ' Saha'
}));

/*
    functions are callable objects
    callable objects can have callable objects - Nested Callable Objects.
*/

function test(fullName){
    return fullName();
}
console.log(
    test(function(){ return "Embed"})
);

/*
    Memory Hoisting - A feature of JavaScript
    Hoisting: means to lift up

    note: it only lift up the function
*/

console.log(firstName,printName());
var firstName = 'Sourav';
function printName(){
    console.log(a,embed());
    function embed(){return 'Hello';}
    var a = 100;
    /*
        in line 188 and 189:
        var a; //created a variable named a which is  undefined
        console.log(a); // returns undefined as a still undefined variable
        a = 100; // set the value of a to 100
    */
    return "Saha (laxman)";
}

/*
    scope and closure
    scope -> access
    concept of garbage collection
    uses symbol table
*/

/*
    inferred Global Scope

    variable or subroutines
    defined in global scope can be accessed from anywhere in that program.

    globally declared objects or variable can't be changed 
    from a subroutine(have to use var or const).
    - that means this is explicitly creating this symbol in this scope and none other.
*/

var engine = {
    piston: '4-Piston',
    titan: '5-Titan'
};

function runExpression(){
    var a  = 10;
    function add(){
        console.log(engine)
    }
    add();
}
runExpression();

/*
    This Contest
    this -> keyword
    - by default points to the window object
    - callable object allow us to change the this context
    new global() -> to change the context of this
*/

// console.log(this)

var object = {
    prop: this,
    method: function(){ return this; }
};

var array = [
    this,
    function(){ return this;}
];

function global(){
    return this;
}

global.call(object);
// new global()

/*
    constructor
    instance : a copy of the blueprint.

    note:
        first letter of the constructor will be capital (naming convention).
        Ex: function Apple()
*/

function Apple(x, y, color, score){
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

    /*
        by default return the value of this
        so no need to write return statement again.
    */
}

var apple_1 = new Apple(10,20,'red',160);
var apple_2 = new Apple(10,30,'green',180);
var apple_3 = new Apple(10,40,'brown',20);

// Modifying instances
apple_2.score = 190;
