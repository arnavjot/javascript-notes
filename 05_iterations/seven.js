const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => {return num + 10}) // using {} - scope opens so we have to use `return`

const newNums = myNumers
                .map((num) => num * 10 )
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNums);