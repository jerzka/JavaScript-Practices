console.log("Hello world!");
console.error("Hello Humans, I am dying!!!");
console.warn("Don't worry!!! We will segregate our trash!");

/*-------------------------------------------------------------*/

// --- Me ---
let myName = "Kasia";
let friendName;
let myAge = 39;
let myFavouriteColour = "blue";

const myDateOfBirth = "July 23, 1983";

console.log(myName + " is " + myAge + " years old, she is born on " 
            + myDateOfBirth + " and her favourite colour is " + myFavouriteColour + ".");


//myAge = myAge+1; //override variable myAge

console.error(myName + " will be " + (myAge+1) + " years old next year."); //not override myAge
console.log("This is write like this: myName + \" will be \" + (myAge+1) + \" years old next year.\"");
console.warn("This can be write like this also: ${myName} will be ${myAge+1} years old next year.");

console.error("Before my friend got a name: ", friendName);

// --- My friend ---
friendName = "Nicolle";
let friendAge = 42;
let friendFavouriteColour = "green";

console.log("My friend name is: ", friendName);

console.log(`My friend is ${(friendAge > myAge) == true  ? "older" : "the same age or younger"} than me!` );


myAge = "42";


console.log("--- myAge=\"42\", friendAge=42 and compare with \"==\" --------");
if(myAge == friendAge) 
    console.log("Me and my friend are in the same age.")
else if(myAge < friendAge) 
    console.log("My friend is older than me");
else
    console.log("My friend is younger than me");

console.log("--- myAge=\"42\", friendAge=42 and compare with \"===\" -------");
if(myAge === friendAge) 
    console.log("Me and my friend are in the same age.")
else if(myAge < friendAge) 
    console.log("My friend is older than me");
else
    console.log("My friend is younger than me");

console.warn("hmm, something is not right!");


myAge = 39;
let summaryAge = myAge + friendAge;
console.log("My and my friend ages add together is ",  summaryAge);
console.log(`Sum of ${myName} and ${friendName}'s age is ${summaryAge}`);

myAge = "39";
console.log("My age is a string \"39\"", myAge);
console.log("Convert to a number: ", Number(myAge));
myAge = "39 y";
console.log("My age is a string", myAge);
console.log("Conversion result: ", Number(myAge));

//----------------------------------------------------
console.log("-- name comparision --");
console.log(`${myName} > ${friendName}: `, myName > friendName);
console.log( myName + " < " + friendName + ": " + (myName < friendName));
console.log("myName === friendName: ", myName === friendName);
