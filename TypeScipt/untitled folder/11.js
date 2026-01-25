const nums = [1, 2, 3, 4]

const newNums = nums.filter((x) => x < 4)
const newNums2 = myFilter(nums, (x) => x % 2 === 0) // 16 / 2 = 8 (ост 0)

// console.log(newNums)
// console.log(newNums2)

function myFilter(nums, isOk) {
  const result = [] // 1, 2

  for (let i = 0; i < nums.length; i++) {
    if (isOk(nums[i]) == true) {
      result.push(nums[i])
    }
  }

  return result
}

const numbers = [1, 2, 3]

numbers.forEach((x) => console.log(x))
myForeach(numbers, (x) => console.log(x))

function myForeach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}
