const myName = "anku"
const repoCount = 15

console.log(myName + repoCount + " repositories")

console.log(`Hello ny name is ${myName} and my repo count is ${repoCount}`)

const gameName = new String('anku-2.0')
console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))
console.log(gameName.length)

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-8,2) // from end
console.log(anotherString);

const newStringOne = "   anku   "
console.log(newStringOne) // prints spaces
console.log(newStringOne.trim())


const url = "https://arnavjot.com/arnavjot%kaur"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))

