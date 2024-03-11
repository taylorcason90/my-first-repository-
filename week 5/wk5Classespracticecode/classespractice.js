// classes.js

// ****************************************************************************
// *********        Extremely Important Concepts        **********
// 4 key concepts of OOP - Object Oriented Programming
// Inheritance, Encapsulation, Abstraction, Polymorphism
// ****************************************************************************

// classes are blueprints - or templates - to create objects
// in classes, you can start with the baseline that you are provided, and then you can customize
// there may be some things that are required, but there may be options
// classes are good for reusability - which we like in code

// we could do this
// this is an example of hard-coding certain things, and we can't reuse the underlying framework
// const lion = {
//     legs: 4,
//     color: "golden",
//     diet: "carnivore"
// }
// console.log(lion);

// // but if i want to add a new animal, we'd have to add a whole new object manually
// const zebra = {
//     legs: 4,
//     color: "black and white",
//     diet: "herbivore"
// }

// class is a reserved JS keyword
// classes (class names) always start with a capital letter

// create an Animal class so that I don't have to manually create an animal each time
// class Name { constructor () {}}
// this is the blueprint that I use every time I create an animal
// the constructor tells me what the inital instance of the animal looks like
// class Animal {
//     // the constructor will be automatically called to create the animal
//     // it is a function that makes a new animal
//     // we are going to use the keyword "this" and it will refer to the object that you are constructing
//     // ===== the following naming is for clarity, but it is not the convention
//     //      defines the default properties that the Animal class has
//     constructor(nameParam, legsParam, colorParam, dietParam) {
//         this.name = nameParam;
//         this.legs = legsParam;
//         this.color = colorParam;
//         this.diet = dietParam;
//         // return is not needed because the new object is returned by default
//     }

//     // Methods also exist in classes
//     // Methods DO NOT go in the constructor
//     // they are still part of the definition of the class
//     // it's like the directions that go with the recipe - if you think of the constructor as the recipe for the class
//     // in here, you don't have to use the keyword function

//     // This is a method in our class
//     bathing() {
//         this.isBathing = true;
//         console.log(this.name + " is bathing");
//     }

//     playing() {
//         this.isPlaying = true;
//         console.log(this.name + " is playing");
//     }


// }

// // initialize a new instance of the class
// let lion = new Animal ("Lion", 4, "golden", "carnivore");
// console.log(lion);
// console.log(lion.name);
// let zebra = new Animal ("Zebra", 4, "black and white", "herbivore");
// console.log(zebra);

// let elephant = new Animal ("Elephant", 4, "gray", "herbivore");
// console.log(elephant);

// let snake = new Animal ("Snake", 0, "black", "carnivore");
// console.log(snake);

// in order to invoke this method
// you need to specific which instance - so which Animal variable
// then add the method name with ()
// elephant.bathing();
// console.log(elephant);

// lion.bathing();
// console.log(lion);

// // adds this variable only to this lion
// lion.offspring = true;
// console.log(lion)

// lion.playing();
// console.log(lion);


// THIS IS AN OBJECT AND SEPARATE FUNCTION
// const person = {
//     name: {
//       first: 'Elyan',
//       last: 'Kemble',
//     },
//     age: 32,
//     location: {
//       city: 'Garland',
//       state: 'Texas',
//       zip: 75040
//     },
//     occupation: 'Front-End Developer'
//   }
//   function introduce() {
//     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//   }

class Person {
    // constructor start
    constructor(firstName, lastName, ageParam, cityParam, stateParam, zipParam, occupationParam) {
        this.name = {
            first: firstName,
            last: lastName
        },
        this.age = ageParam,
        this.location = {
            city: cityParam,
            state: stateParam,
            zip: zipParam
        },
        this.occupation = occupationParam
    }
    // end of the constructor

    // make methods here
    introduce() {
        console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
      }
}

let elyan = new Person("Elyan", "Kemble", 32, "Garland", "TX", 75040, "Front-End Developer");
// console.log(elyan);
// elyan.introduce();


// define new animal class
class Animal {
    constructor(eyes, legs, isAwake, isMoving) {
        this.eyes = eyes,
        this.legs = legs,
        this.isAwake = isAwake,
        this.isMoving = isMoving
    }
    // add methods after the constructor

    sleep() {
        this.isAwake = false;
    }

    wake() {
        this.isAwake = true;
    
    }
    sit() {
        this.isMoving = false;
    }

    walk() {
        this.isMoving = true;
    }
    speak(sound) {
        console.log(sound);
    }

    toString(animal = 'Animal') {
        return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
      }
}

const cat1 = new Animal(2, 4, true, false);
// cat1 is a specific instance
console.log(cat1);
cat1.sleep();
console.log(cat1);
// this will not run because sleep() is not a static method, and so it needs to be called by a specific instance of an Animal
// Animal.sleep();
console.log(cat1.toString());


const dog1 = new Animal(2, 4, true, true);
// dog is a specific instance
console.log(dog1);


const cat2 = new Animal(2, 4, false, false);

const cow1 = new Animal(2, 4, true, false);

// this Cat class is child of Animal, which means that it 
// INHERITS all of the methods and properties in Animal
class Cat extends Animal {
    constructor(fur, isAwake, isMoving) {
        // this is using the Animal constructer - that is what super does
        super(2, 4, isAwake, isMoving);
        this.fur = fur;
      }

      // outside of constructor but inside of class definition
      // speak() does not need to return anything because it is just console.log(sound)
      speak() {
        super.speak("Meow...");
      }
      // toString() returns something
      // so this is telling me to use my parent toString method, and return whatever it returned
      toString() {
        return super.toString("Cat");
      }

}

const cat3 = new Cat ("Black and White", true, true);
console.log('initial cat3');
console.log(cat3);
cat3.sit();
console.log('after sit');
console.log(cat3);

cat3.speak('meow');
console.log(cat3.toString());
