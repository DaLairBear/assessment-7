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
To me, while doublerAppend is faster at first glance, its scaleablity in regards to runtime is much less that doublerInsert.