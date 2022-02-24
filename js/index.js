// Iteration 1. Names and Inout

let hacker1 = prompt("Please tell me your name.");
console.log(`The driver's name is ${hacker1}`);

let hacker2 = prompt("Please tell me your name.");
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2. Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} 

// Iteration 3. Loops

for (let i = 0; i < hacker1.length; i++) {
  let hackerNameCharacter = hacker1.charAt(i);
  console.log(hackerNameCharacter.toUpperCase());
}


for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2.charAt(i));
}


if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}
