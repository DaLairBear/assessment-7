//Write a function that takes in an array of numbers.
//The function should return True if any two numberss in list sum to 0, and false otherwise.

const sumZero = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}
console.log(sumZero([1, 2, 3]))

console.log(sumZero([1, 2, 3, -2]))

//I feel as though this function runs faster that 1ms for the size of the arrays inputed.
//I believe the second iteration would run faster due to it stoping as soon as it hits and 0 sum
//I think that the larger the array the longer the run time is, especially if there is no 0 sums in it

//runtime complexity: O(n^2)
//space complexity: O(n)

//To determine the exact run time of each here is the code.

const perf = require('execution-time')()
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3, -2]

perf.start()
sumZero(arr1)
let results1 = perf.stop()

perf.start()
sumZero(arr2)
let results2 = perf.stop()

console.log(results1.preciseWords)
console.log(results2.preciseWords)