var addition = 2 + 2
console.log("Addition: 2 + 2 = " + addition)

function addNumbers() {
    var numberOne = 2
    var numberTwo = 2
    console.log("Addition in function = " + numberOne + numberTwo)
}
addNumbers()

console.log()

function addAccepdedNumbers(number1, number2) {
    var addition = number1 + number2
    return addition
}
var resultForAddition = addAccepdedNumbers(5, 5)
console.log("Result for addition = " + resultForAddition)

console.log()
console.log()

var person = {
    name: "Jamila"
}
console.log(Object.values(person))
console.log("Jamila".toLowerCase())
console.log("Jamila".toLocaleUpperCase())
console.log("Jamila".toUpperCase())
console.log("Jamila".indexOf("m"))


console.log()
console.log()


const getBrand = function(brand) { // instead of writing: function getBrand(brand) {... .}. 
    // console.log(brand)
    return {
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
}

const brand = getBrand("Amigoscode")
console.log(JSON.stringify(brand, null, 1))


console.log()
console.log()


// also can write like this -->
const getBrand2 = brand => ({
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
)
const brand2 = getBrand2("Amigoscode")
console.log(JSON.stringify(brand2, null, 1))


console.log()
console.log()


// or like this, with the dafault parameter -->
const getBrand3 = (brand = "Hello") => ({ // can have as many parameters as we want, any type
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
)
const brand3 = getBrand3() // now we can omit passing the parameter inside, but when we passed- our parameter will be more important
console.log(JSON.stringify(brand3, null, 1))


console.log()
console.log()


const add = (a, b) => a + b
// row 66 is equals to -->  function add(a, b) { return ... .}
/*
const calculate = (a, b, sign) => {
    switch(sign) {
        case '+':
            return a + b
        case '-':
            return a - b
        default
            // throw an error    
    }
}
*/