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


// Bonus 1

let lorem3Paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie tristique porta. Vivamus in augue elit. Aliquam nec sapien a metus consectetur sagittis. Vestibulum luctus egestas tellus, eget rutrum ipsum ullamcorper sed. Nam consectetur dolor ac lectus hendrerit scelerisque. Vestibulum mollis, erat scelerisque cursus vestibulum, neque nisl viverra sem, a gravida lacus tellus vel tellus. Suspendisse ut odio ac augue lobortis aliquet. Cras dapibus est vel sem blandit, et venenatis magna sodales. Morbi aliquam diam justo, a convallis risus pretium et. Donec mattis in libero non posuere. In sodales leo lobortis dignissim malesuada. Cras tempus sagittis purus, ac dignissim ante rutrum non. Morbi dapibus, tellus et interdum sodales, neque sapien fermentum sem, sit amet dictum risus leo at lacus. Donec vel risus in lorem ultricies egestas. Donec et dolor nulla. In dapibus metus id ligula gravida mattis. Phasellus aliquam magna tincidunt porta pharetra. Sed vulputate commodo efficitur. Donec egestas interdum consectetur. Fusce quis justo augue. Fusce nibh risus, euismod non dictum sit amet, pharetra at sem. In vestibulum, lacus eget iaculis ullamcorper, lorem tellus pulvinar orci, in cursus ipsum nisi rhoncus lacus. Quisque sit amet auctor libero. Duis at volutpat est. Cras ullamcorper tortor vitae magna molestie, non maximus velit porttitor. Suspendisse potenti. Proin dictum turpis at ex tristique, at hendrerit sem aliquet. Aliquam convallis ornare purus, ac sagittis mauris mattis quis.Praesent eu leo feugiat, iaculis nibh ut, sagittis velit. Proin sed vehicula diam. Etiam non egestas ex. Maecenas ornare est ornare magna luctus, et congue dui mollis. Sed facilisis magna at ex suscipit, non rutrum quam molestie. Ut hendrerit, turpis nec egestas accumsan, est sem mattis diam, eget congue lacus urna in sapien. Phasellus consectetur vitae felis in rhoncus. Duis sapien neque, mattis a sollicitudin non, varius a ligula. Quisque tincidunt at tortor ac tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ante risus, imperdiet congue viverra a, interdum at dui. Aenean id felis scelerisque, viverra nibh nec, venenatis sem. Fusce vel tortor sit amet nunc convallis auctor."

function countWords(lorem3Paragraphs) {
  let arrayWords = lorem3Paragraphs.split(" ");
  console.log(arrayWords.length);
}

countWords(lorem3Paragraphs);


let word = "et";
let count = 0;
let arrayWords = lorem3Paragraphs.split(" ");
  
  for (i = 0; i < arrayWords.length; i++){
    if (arrayWords[i] === word) {
        count++;
    }
  }

console.log(count);