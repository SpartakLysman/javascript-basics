/* 
var firstName = "Jamila"
var age = 21
var isFemail = true
var balance = 100.32
var dob = new Date(2000, 0, 30)
*/

var person = {
    firstName: "Jamila",
    age: 21,
    isFemail: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }, 
    toString: function() {
        return `Name: ${this.firstName} Age: ${this.age}`
    }
}
person.lastName = "Ahmend"

console.log(person)

console.log(person)
console.log(person.address)
console.log(person.address.city)

console.log()

console.log(Object.values(person))

console.log()

console.log(Object.keys(person))

console.log()

console.log(JSON.stringify(person))


console.log()
console.log()
console.log()


console.log(person.toString())
console.log()
console.log(person)
console.log()

for (const p in person) {
    console.log(p)
}


console.log()
console.log()



/*
const firstName = person.firstName
const age = person.age
const balamce = person.balamce

*/// <-- is equals to -->

/*
const {firstName, age, balance} = person

console.log(firstName)
console.log(age)
console.log(balance)
*/


const {
    firstName,
    age, 
    balance, 
    address: { city } // can rename 'city' to, for example, 'town' -> { city: town }, or 'firstName' -> firstName: name.
} = person

console.log(firstName)
console.log(age)
console.log(balance)
console.log(city)

console.log()
console.log()
console.log()
console.log()
// SPREAD OPERATOR -->
console.log("SPREAD OPERATOR -->")


const jamila = {
    firstName: "Jamila",
    age: 21,
    isFemail: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }, 
    toString: function() {
        return `Name: ${this.firstName} Age: ${this.age}`
    }
}

const address = {
    city: "London",
    postCode: "SW9"
}

// and we can combine using ... ->

const combinedPerson = {
    ...jamila,
    ...address // if we want to save address as an old object: 'address: { ...adress }
}

console.log(combinedPerson)