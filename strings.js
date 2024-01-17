// creating single-line strings
let firtName="Gregory";
let lastName="Burgos";
let title =`VP Engineering`
title= `CTO`

//String concatenation with the plus operator
let fullName = firtName+ ""+ lastName;
fullName=`${firtName} ${lastName}`
console.log(fullName)

// Creating multi-line strings with \n
let bio =`About gregory Burgos
gregory burgos is the current CTO of globomantic.
he also serves as an author for pluralsight`;
console.log(bio)

//escaping characters
let quote ='gregory said "JavaScript is great."';
quote="gregory said, \"JavaScript is great.\"";
quote=`javascript can use 'single' and "double" quotes.`; 
quote=`In javascript, you must escape the \\ character`;
console.log(quote);

//String length
let length =quote.length;
console.log(`Quote Length: ${length}`);

//Accessing specific characters
let secondCharacter= quote[1];
console.log(`Second Character : ${secondCharacter}`)
 
// changing case
let uppercaseName =fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName =fullName.toLowerCase();
console.log(lowercaseName );

//Finding a substring
let idx1 = fullName.indexOf("Gre");
console.log(`Index 1: ${idx1}`)
let idx2 = fullName.indexOf("Bur");
console.log(`Index 2: ${idx2}`)
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`);

// Does a string contain a substring
let doesContain =fullName.includes("Dav");
console.log(doesContain)