    const numbers = [1, 2, 3, 4];
    const words = ["hello", "world"];
  
    // ---------------- map
    function myMap(array, callbackFunc) {
        const result = [];
        for (let index = 0; index < array.length; index++) {
          const value = array[index];
          result.push(callbackFunc(value)); 
        }
        return result;
      }
      console.log(myMap(numbers, el => el * 2)); 

  
    // -------------- forEach 
    function myForEach(array, callbackFunc) {
      for (let index = 0; index < array.length; index++) {
        callbackFunc(array[index]);
      }
    }
    
    myForEach(numbers, (value) => console.log(value));
    


  
    // ---------------- join 
    function myJoin(array, centerElement) {
      if (arr.length === 0) return "";
    
      let text = "" + array[0];
      for (let i = 1; i < array.length; i++) {
        text += centerElement + array[i];
      }
      return text;
    }
    console.log(myJoin(words, "-"));


  
    // --------------- every 
    function myEvery(array, callbackFunc) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
    
        const isGood = callbackFunc(item);
        if (isGood === false) return false; 
      }
    
      return true; 
    }
  
    console.log(myEvery(numbers, (n) => n > 0));


  
    // ---------------- fill 
    function myFill(array, fillValue, startIndex, endIndex) {
      for (let i = startIndex; i < endIndex; i++) {
        array[i] = fillValue;
      }
      return array; 
    }
    console.log(myFill(numbers, 0, 1, 3)); 


  
    // -------------- filter
    function myFilter(array, callbackFunc) {
      const result = [];
    
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const isOk = callbackFunc(item);
        if (isOk === true) result.push(item);
      }
    
      return result;
    }
    console.log(myFilter(numbers, (n) => n % 2 === 0)); 
    


  
      // ---------------- find
    function myFind(array, callbackFunc) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];

        const isOk = callbackFunc(item);
        if (isOk === true) return item; 
      }
      return undefined; 
    }

    console.log(myFind(numbers, (n) => n > 2)); 


// ------------- findIndex
function myFindIndex(array, callbackFunc) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    const isOk = callbackFunc(item);
    if (isOk === true) return i; 
  }
  return -1;
}

console.log(myFindIndex(numbers, (n) => n > 2)); 


// -------------- includes
function myIncludes(array, valueToFind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToFind) return true;
  }
  return false;
}

console.log(myIncludes([1, 2, 3], 2)); 


// -------------- indexOf
function myIndexOf(array, valueToFind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToFind) return i;
  }
  return -1;
}

console.log(myIndexOf(numbers, 3)); 


// ------------ lastIndexOf
function myLastIndexOf(array, valueToFind) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === valueToFind) return i;
  }
  return -1;
}

console.log(myLastIndexOf([1, 2, 3, 2], 2)); 


// ---------------- some
function mySome(array, callbackFunc) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    const isOk = callbackFunc(item);
    if (isOk === true) return true; 
  }
  return false;
}

console.log(mySome(numbers, (n) => n > 3)); 

  