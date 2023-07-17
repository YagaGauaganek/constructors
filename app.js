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
        this.sound = props.sound;
        // Object.assign(this.props);
        // can be used instead of writting the 4 lines of code above
    }   
    animalSpeak(){
        console.log.(this.sound);
    }
}

const wildAnimal = new Animal({name: "Tiger", color: "blacl and orange", age: 4, sound: "Roar"});
console.log(wildAnimal.name);

const housePet = new Animal ({name: "Dog", color: "red", age: 8, sound: "woof"});
console.log(housePet.color);

wildAnimal.animalSpeak();
housePet.animalSpeak();

class Dog extends Animal{
    constructor(props, type){
        super(props):
        this.type = type;

    }
    speak = () => {
        console.log('${this.name} barks');
    };
}

const spot = new Dog({ name: "spot", color: ["black", "white"], age: 10, sound: "woolf"}, "Dalamation");
console.log(spot);


spot.speak();
spot.goodBoi();
// wildAnimal.speak(); this will not work as it does not have acces to the methods of the Dog

// functions

//functions declarations
function myName(name) {
    return 'hi my name is ${name}';
}

//function expression
const theName = function(name) {
    return 'Yo, my name is ${name}';
}

// arrow function
const thatName = (name) => {
    return 'Wow, check out that ${name}';
};

// const tree = () => console.log('hey im a tree');
// tree();

// re-write as one line
// const thatName = name => 'huh, my name is ${name}'

myName("chka, chka, slim shady");
theName("chka, chka, slim shady");
thatName("chka, chka, slim shady")