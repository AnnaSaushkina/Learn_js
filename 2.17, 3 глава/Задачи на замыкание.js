function counter(num = 0) {
    let x = num
    return function() {
        return x++
    }
  }
  
  let result = counter(3)
  console.log(result())
  console.log(result())
  console.log(result())
  console.log(result())





  function createSecret(secret) {
    return function() {
        return secret++;
    };
    }

    let result2 = createSecret(2)
    console.log(result2())
    console.log(result2())
    console.log(result2())