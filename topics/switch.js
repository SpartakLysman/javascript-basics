var gender = "F"

if (gender == "M") {
    console.log("Male")
} else if (gender == "F") {
    console.log("Female")
} else {
    console.log("Unknown")
}

console.log()
console.log("Using Switch")

switch (gender) {
    case "M":
        console.log("Male")
        break
    case "F":    
        console.log("Female")
        break
    default:
        console.log("Unknown")
}