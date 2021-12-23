//A pangram is a sentence that contains all the letters of the English alphabet at least once,
// like “The quick brown fox jumps over the lazy dog.”

//Write a function to check a sentence to see if it is a pangram or not.

let pangram1 = "The quick brown fox jumps over the lazy dog!"
let pangram2 = "I like cats, but not mice"

const pangramSentence = (str) =>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let strArr = str.toLowerCase()

    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0){
            return false
        }
    }
    return true
}

console.log(pangramSentence(pangram1))
console.log(pangramSentence(pangram2))

//I feel as though this function will never reach over 1ms.
//I believe this function will have a max runtime for if it looped though the entire alphabet no matter the string
//That being said, if a string is not a panagram it will always be a much shorter time than if it is.

//runtime complexity: O(n)
//space complexity: O(n)

//Here is the code to determine the exact runtime.
const perf = require('execution-time')()

perf.start()
pangramSentence(pangram1)
let results1 = perf.stop()

perf.start()
pangramSentence(pangram2)
let results2 = perf.stop()

console.log(results1.preciseWords)
console.log(results2.preciseWords)