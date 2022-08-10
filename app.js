const showTimeout = () => {
    // Calling setTimeout() that passes a function that shows an alert after 5 seconds.
    setTimeout(() => {
      alert('I only show once after 5 seconds!');
    }, 5000);
  };
   
  // Calling the showTimeout() function
  showTimeout();


// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("All done!"), 5000);
//   });
   
//   // Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction. 
//   const asyncFunction = async () => {
//     // Awaiting the promise to resolve and saving the result to the variable finalResult.
//     const finalResult = await newPromise;
   
//     // Logging the result of the promise to the console
//     console.log(finalResult); // Output: All done!
//   }
   
//   asyncFunction();

  /*
        ## Promise .then() .catch()
  const testLuck = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) { 
    resolve('Lucky winner!')
  } else {
    reject(new Error('Unlucky!'))
  }
});
 
testLuck.then(message => {
  console.log(message) // Log the resolved value of the Promise
}).catch(error => {
  console.error(error) // Log the rejected error of the Promise
});

  */