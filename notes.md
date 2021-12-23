|Array Size|doublerAppend|doublerInsert|
|__________|_____________|_____________|
|extraLarge| 971.7338 ms |   3.0586 ms |
|   large  |   8.023  ms | 491      μs |
|  medium  | 169.2    μs | 136      μs |
|   small  |  45      μs |  98.7    μs |
|   tiny   |  34.9    μs |  91.3    μs |
|__________|_____________|_____________|

Depending on array size, the doubleAppend function is faster functioning with smaller arrays and takes more time the larger the array is.
While doublerInsert overall is faster with processing larger arrays, it takes more time that the doublerAppend function with smaller arrays.
While it seems that doublerInsert would save more time in scaleability terms, since unshift has to shift an
entire array over to insert a element at the beginning of the array you run into a space complexity issue.
Even though the time goes down with doubleInsert, its spacecomplexity will continue to go up and up exponetially as the size of the array gets larger.