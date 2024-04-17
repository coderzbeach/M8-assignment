//STEP 1
let movies =['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
console.log(movies[1])

//STEP 2
let movies = new Array(5)
movies[0] = 'Heat'
movies[1] = 'Batman'
movies[2] = 'Die Hard'
movies[3] = 'Dark Knight'
movies[4] = 'Terminator'
console.log(movies[0])

//STEP 3
let movies = new Array(5)
movies[0] = 'Heat'
movies[1] = 'Batman'
movies[2] = 'Die Hard'
movies[3] = 'Dark Knight'
movies[4] = 'Terminator'
movies.splice(2, 0, 'Fast and Furious')
console.log(movies.length)

//STEP 4
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
delete movies[0]
console.log(movies)

//STEP 5
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
for (let index in movies) {
    console.log(movies[index])
}
//STEP 6
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
for (let movie of movies) {
    console.log(movie)
}

//STEP 7
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
movies.sort()
for (let movie of movies) {
    console.log(movie)
}

//STEP 8
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
let leastFavMovies = ['Taken', 'Twilight', 'San Andreas']

console.log("Movies I like:\n")
for (let movie of movies) {
    console.log(movie)
}

console.log("\nMovies I regret watching:")
for (let movie of leastFavMovies) {
    console.log(movie)
}

//STEP 9
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
let leastFavMovies = ['Taken', 'Twilight', 'San Andreas']
let allMovies = movies.concat(leastFavMovies)
allMovies.sort().reverse()
console.log(allMovies)

//STEP 10
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
let leastFavMovies = ['Taken', 'Twilight', 'San Andreas']
let allMovies = movies.concat(leastFavMovies)
allMovies.sort().reverse()
let lastMovie = allMovies.pop()
console.log(lastMovie)

//STEP 11
let movies = ['Heat', 'Batman', 'Die Hard', 'Dark Knight', 'Terminator']
let leastFavMovies = ['Taken', 'Twilight', 'San Andreas']
let allMovies = movies.concat(leastFavMovies)
allMovies.sort().reverse()
let firstMovie = allMovies.shift()
console.log(firstMovie)

//STEP 12


//STEP 13
let movies = [ ['Heat', 1], ['Batman', 2], ['Die Hard', 3],  ['Dark Knight', 4], ['Terminator', 5]]
let movieNames = movies.filter(item => typeof item[0] === 'string').map(item => item[0])
console.log(movieNames)

//STEP 14
let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']
let showEmployee = function(employeeArray) {
    console.log("Employees:\n")
    for (let employee of employeeArray) {
        console.log(employee)
    }
}
showEmployee(employees)

//STEP 15
function filterValues(dataSet) {
    return dataSet.filter(value => value || typeof value === 'boolean')
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
function getRandom(dataSet) {
    let randomIndex = parseInt(Math.random() * dataSet.length);
    return dataSet[randomIndex]
}
let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getRandom(numericArray))

//STEP 17.
let numericArray = [10, 5, 20, 15]
numericArray.sort((a, b) => b - a)
console.log(numericArray[0])