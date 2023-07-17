"use strict"

console.log("you are on the top of class");

// class declaration
// class Animal{}

// class expression: this is anonymous but assigned to a variable
// const Animal = class Animal{}

class Animal {
    constructor(props) {
        this.name = props.name
        this.color = promps.color
        this.age = props.age;
    }   
}

const wildAnimal = new Animal({name: "Tiger", color: "blacl and orange", age: 4});
console.log(wildAnimal.name);