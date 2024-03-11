//promise constructors take an executor function
// creatingPromises.js
//has parameters resolve and reject which are call backs for...
//part 2 of 308.3
// most times you will see these named _resolve_and_reject 
//theyre labels for readibility for those looking at code
//it is the order that matters to the interpreter 
//the first Func will always be thhe resolveFunc 
//you can see situations where there is only resolve...
//but you cant have only reject because the first argument will always be resolved

 //this part is calling the constructor
 //the part in the new Promise(__________) is whats getting passed to the constructors
const myFirstPromise = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Success");
}, 250);
});
//we will call resolve when what we're doing async 
myFirstPromise.then((successMessage) => {
console.log('Yay! ${successMessage}');
});


// this logs 1 then 2 or then Yay! Succes"

// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");
// // Using what you know about the event loop, how would you expect the following code to behave?

// Promise.resolve().then(() => console.log(2));
// console.log(1);
// //we think bird first
// //then "Dog"
// //then "Cow
// //the "Cat"
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log("Cat"));

// Promise.resolve()
//   .then(() => console.log("Dog"))
//   .then(() => console.log("Cow"));

// console.log("Bird");



function resolveAfterSeconds(t) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Done!');
        }, t * 1000);
    });

    return myPromise;
}

async function testAwait() {
    console.log('Testing...');

    const result = await resolveAfterSeconds(2);

    console.log(result);
}

testAwait();