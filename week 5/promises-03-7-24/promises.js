//promises.js

//create a promise that resolves after one second

// const myPromise = new Promise(() => {});

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Guess this worked!")
//     }, 1000)
// });
//do something with the promise
//add then() methods to handle additional tasks
//no curly brace because its only one line

// myPromise
//     .then((x) => { console.log(x + 'Again?'); console.log(x) })
//     .then((x) => console.log(x + 'Third time!'))
//     .then((x) => x + 'Promies are cool')
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(() => console.log('done'))

// console.log(x)

console.log('rest of code') //comes out first no wait

//promise chaining

// new Promise(function (resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
// }).then(function (result) { // (**)
//     console.log("results in:" + result)

//     return result * 2;
// }).then(function (result) { // (***)
//     console.log("result second:" + result)

//     return result * 2;
// }).then(function (result) {
//     console.log("third result:" + result)
//     return result * 2;
// });


// new Promise((resolve, reject) => {
//     console.log("Initial");
  
//     resolve();
//   })
//     .then(() => {
//       throw new Error("Something failed");
  
//       console.log("Do this");
//     })
//     // .catch(() => {
//     //   console.error("Do that");
//     // })
//     .catch((err) => {
//         console.error(err);
//       })
//     .then(() => {
//       console.log("Do this, no matter what happened before");
//     });
console.log('---------------- promise.all and promise.any----------------')

//     // const promise1 = Promise.reject(0);
// const promise1 = new Promise((resolve) => setTimeout(resolve, 300, 'medium'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'slow'));

// const promises = [promise3, promise2, promise1];

// Promise.any(promises).then((value) => console.log(value)); // dont care to see them all

// Promise.all(promises).then((value) => console.log(value)); // you want to see them all 


const myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML API.
    setTimeout(() => {
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log(`Yay! ${successMessage}`);
  });   