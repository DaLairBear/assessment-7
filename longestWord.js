//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const longestWord = (arr) =>{
    let longest = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length
        }
    }
    return longest
}

console.log(longestWord(["hi", "hello"]))


//I feel like this takes less than 1ms.
//But the longer the Array of strings to check the longer it will take run as it loops through each string

//Here is the code to determine the actual time output
const perf = require('execution-time')()

perf.start()
longestWord(["hi", "hello"])
let results1 = perf.stop()

console.log(results1.preciseWords)