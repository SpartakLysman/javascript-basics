for (var i = 0; i <= 10; i++) {
    console.log(i)
    
}

console.log("value of i outside the loop: " + i)

//Because->
/*
for (var i = 0; i <= 10; i++) {
    console.log(i) 
}
*/
// IS EQUALS TO:
/*
var i;
for (i = 0; i <= 10; i++) {
    console.log(i) 
}
*/