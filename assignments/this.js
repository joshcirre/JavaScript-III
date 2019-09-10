/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding: Everything takes place within the context of a global object. In browsers, the global object is called the window. In Node, however, it is called global binding. "This" takes place within the context of the global or window object.
 * 2. Implicit Binding: This is, quite literally, binding an object to a parent object using dot notation. This would be something like, "parent.name".
 * 3. New Binding: This is when using a constructor function with the built-in javascript function, `New`. This refers to the object being returned by the constructor function.
 * 4. Explicit Binding: Explicit binding uses the call or apply functions in order to pass "this" fucntions belonging to one object or another outside of the given objects.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

window.age = 27;

function sayAge() {
  console.log(`My age is ${this.age}`);
}

sayAge();

// Principle 2

// code example for Implicit Binding

const user = {
  name: 'Josh',
  age: 25,
  greet() {
    alert(`Hello, my name is ${this.name}`);
  }
};

user.greet();

// Principle 3

// code example for New Binding

function User(name, age) {
  this.name = name;
  this.age = age;
}

const me = new User('Josh', 25);

console.log(me);

// Principle 4

// code example for Explicit Binding

function greet() {
  alert(`Hello, my name is ${this.name}`);
}

const userName = {
  name: 'Josh',
  age: 25
};

greet.call(userName);
