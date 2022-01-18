/* 
    
    We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

    If the number is a multiple of 3, print the string "Loopy" instead of the number. (ex. 102, 105, 108)
    If the number is a multiple of 4, print the string "Lighthouse" instead of the number. (ex. 196)
    If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number. (ex. 108)

    By print, we are referring to console.log.

*/

/*
for (let x = 100; x <= 200; x++) {
    if ((x % 3 === 0) && (x % 4 ===0)) {
        console.log("Loopy");
    }
    else if (x % 4 === 0) {
        console.log("Lighthouse");
    }
    else if (x % 3 === 0) {
        console.log("LoopyLighthouse");
    }
    else {
        console.log(x);
    }
}
*/

for (let x = 100; x <= 200; x++) {
    switch (x <= 200) {
        case (x % 3 === 0 && x % 4 !== 0):
            console.log("Loopy");
            break;
        case (x % 4 === 0 && x % 3 !== 0):
            console.log("Lighthouse");
            break;
        case ((x % 3 === 0) && (x % 4 === 0)):
            console.log("LoopyLighthouse");
            break;
        default:
            console.log(x);
            break;
    }
}