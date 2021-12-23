//Write a function that takes in a single word, as a string.
//It should return True if that word contains only unique characters. Return False otherwise.

const uniqueCharacters = (str) =>{
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}
console.log(uniqueCharacters("Monday"))

console.log(uniqueCharacters("Moonday"))

//This feels exactly the same as the Sum Zero function
//I feel as though this function runs faster that 1ms for the size of the string inputed.
//I believe the second iteration would run faster due to it stoping as soon as it hits a duplicate character
//I think that the larger the string the longer the run time is, especially if there is only unique characters

//runtime complexity: O(n^2)
//space complexity: O(n)


//To determine the exact run time of each here is the code.

const perf = require('execution-time')()
let str1 = "Monday"
let str2 = "Moonday"

perf.start()
uniqueCharacters(str1)
let results1 = perf.stop()

perf.start()
uniqueCharacters(str2)
let results2 = perf.stop()

console.log(results1.preciseWords)
console.log(results2.preciseWords)