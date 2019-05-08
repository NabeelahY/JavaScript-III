/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: 
    In this scenario, the 'this' keyword is not located in any object or constructor function. Since it has nowhere to point/reference to, it returns the window object.

* 2. Implicit binding:
    The 'this' keyword is pointing to the constructor function or object it was created in. By using the dot notation on the 'this' keyword, it creates an instance of either of them.

* 3. New binding: 
    The 'this' keyword refers the the new object that will be created when creating an object with the new keyword.

* 4. Explicit binding: 
    The 'this' keyword is overwritten in other objects when .call(), .apply() or .bind() is used
      
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function randomObj () {
    console.log(this)
}
randomObj();

// Principle 2

// code example for Implicit Binding

const plant = {
    type: 'flower',
    color: 'purple',
    name: 'Lavender',
    introduce: function () {
        console.log(`This is a ${this.color} ${this.type} called ${this.name}`);
        console.log(this);
    }
}
plant.introduce();

// Principle 3

// code example for New Binding

function School (course, level) {
    this.course = course,
    this.level = level
    this.say = function () {
        console.log(`${this.course}, ${this.level} level`);
        console.log(this);
    }
}

const senior = new School('History', 400);
senior.say();

// Principle 4

// code example for Explicit Binding
const junior = new School('Biology', 100);

senior.say.call(junior);
senior.say();
