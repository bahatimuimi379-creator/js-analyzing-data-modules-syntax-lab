
// index.js

// 1. First, require datejs as required by Step 5
require('datejs');

/**
 * Task 2: Determine the Design and Develop the Code
 * 
 * Step 1: Create a combineUsers function with a rest argument ...args
 */
function combineUsers(...args) {
  
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args to isolate each array
  for (const internalArray of args) {
    
    // Step 4: Merge arrays together into the users attribute using the spread operator
    combinedObject.users.push(...internalArray);
  }

  // Step 5: Get today's date using datejs with format 'M/d/yyyy'
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// 2. Put the starter module.exports block at the very BOTTOM of the file
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};