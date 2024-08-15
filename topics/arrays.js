var firstName = "Jamila"

var names = ["Jamila", "Alex", "Sam", "Joe", "Aisha"]
console.log(names)

console.log()

console.log("Index 0 - " + names[0])
console.log("Index 1 - " + names[1])
console.log("Index 2 - " + names[2])
console.log("Index 3 - " + names[3])
console.log("Size = " + names.length)

console.log()
console.log()
console.log()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => console.log(number))

numbers[3] = 44
numbers.push(20)
console.log(numbers)

console.log()

const indexOfFive = numbers.indexOf(5)
console.log(indexOfFive)

numbers.splice(indexOfFive, 1)
console.log(numbers)




console.log()
console.log()
console.log()
console.log()



constnumberTimesTwo = numbers.map(n => n * 2)
constnumberTimesTwo.forEach(num => console.log(num))

console.log()
console.log()
console.log()


const [jamila, alex, sam, joe, aisha] = names // if there are more names in the array, we can say -> '[jamila, alex, sam, joe, aisha, ...rest] = names. If print 'rest', It will be an array cantaining the rest of the names
console.log(jamila)
console.log(alex)
console.log(sam)
console.log(joe)
console.log(aisha)
console.log()
