
// function composeFunctions(functions) {
//     // If the array of functions is empty, return the identity function
//     if (functions.length === 0) {
//         return function(x) { return x; };
//     }
//     console.log(functions)

//     // Define the composed function
//     return function(x) {
//         // Start with the input value
//         console.log(x)
//         let result = x;
//         // Iterate through the array of functions in reverse order
//         for (let i = functions.length - 1; i >= 0; i--) {
//             // Apply each function to the result
//             result = functions[i](result);
//         }
//         return result;
//     };
// }

// // Example usage:
// // Define some sample functions
// function f(x) { return x * 2; }
// function g(x) { return x + 3; }
// function h(x) { return x - 5; }

// // Create an array of functions
// const arrayOfFunctions = [f, g, h];

// // Compose the functions
// const composedFunction = composeFunctions(arrayOfFunctions);

// // Test the composed function
// console.log(composedFunction(10)); // Output should be 16
// 
// const addTwoPromises = async function(promise1, promise2) {
   
//    const [value1, value2] = await Promise.all(promise1, promise2)

//     return value1 + value2;
//   };
  
//   // // Example usage:
//   const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
//   const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
  
//   addTwoPromises(promise1, promise2)
//     .then(console.log); // Output: 7
async function sleep(millis) {
    return new Promise (resolve => {
         setTimeout(()=>{
             resolve(millis);
         },millis);
    });
 }
 
  
   let t = Date.now()
   sleep(100).then(() => console.log(Date.now() - t)) // 100
  
 