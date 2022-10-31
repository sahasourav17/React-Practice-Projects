# JS-Basic

### Adding JS in an HTML Page
* Method-1

``` html
<script type = "text/javascript">
    // Code JS here
</script>
```
* Method-2 (Call an external JS file)
```html
<script src = "script.js"></script>
```
Advantages of using Method-2:
* It separates HTML and Code
* It makes HTML and JS easier to read and maintain
* Cached JS files can speed up page loads

**Note: Scripts can be placed in <body>, or in the <head> section of an HTML page,or in both.
      But if we place the scripts in head section it will slows down the HTML rendering.
      So, we will always try to place the scripts in the <body> section.**
      
### Variables

* **```var```** - Can be reassigned and works on global scope. Variables defined with ```var``` move to the top when code is               executed.
* **```const```** - Cannot be reassigned and not accessible before they appear within the code. Works on local scope.

* **```let```** - Similar to const but ``let`` variable can reassigned but not re-declared.

**Data Types**
``` js
var employeeId = 1704093; // Numbers

var x = 'Sourav'; // String.Here, you can use  double quotation also.

let c = true; // Bolean

const PI = 3.14159; // Constant numbers.
```

**Objects**
```js
// Defining a simple object
var person = {
    firstName:'john',
    lastName: 'Doe',
    age:20,
    nationality:'Bangladeshi'
};
```
**Arrays**
```js
var fruits = ["Banana","Orange","Mango"];
```
**Embedding of Objects (objects inside of an object)**
```js
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
```
**Embedding of Objects and Arrays**

* objects can contain arrays
* arrays can contain objects
```js
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
```
**Member Access**

* Dot Operator(.)
* Computed member access
```js
// dot operator
employee.employee1.age = 27;
console.log('Driving status of the employee: ' + employee.employee1.isDrive());

// computed member access
console.log(car.engine.fuelType[0]);
```
### Object Modification

* Member creation 
* Member assignment
* Deletion

```js
car.brand = "Toyota"; // assignment

car.speed = 160; // adding a new key to car object

/*
 adding a new method to car object
*/
car.raiseSpeed = function(){ return 'Speed raise to: ' + car.speed*2 + 'Km/h.'; };

delete car.engine.size; // member deletion. Outputs a bolean value (true/false).
```

### Array Modification

**Prebuilt Array Methods**
* ```concat``` - join several arrays into one.


