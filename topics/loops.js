for (var i = 0; i <= 10; i++) {
    console.log(i)
}

console.log()
console.log("for i ⬇︎")

var names = ["Jamila", "Alex", "Sam", "Joe", "Aisha"]
for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log()
console.log("for of ⬇︎")

for (const name of names) {
    console.log(name)
}

console.log()
console.log("for each ⬇︎")

names.forEach(name => { //function(name)
    console.log(name)
});
