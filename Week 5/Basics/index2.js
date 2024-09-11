console.log("Hi my name is Ayushman Baghel");
let a=5;
let b=52;

console.log(b%a);
let pencil=10;
let eraser=5;
console.log("The total price is: ",pencil+eraser," Rupees.");
let output=`The total price is: ${pencil+eraser} Rupees.`;
console.log(output);

//practice
let color="green";

if(color=="red"){
    console.log("Stop!");
}else if(color=="Yellow"){
    console.log("Slow down!");
}
else if(color=="green"){
    console.log("You can go!");
}

// let name=prompt("Enter your name: ");

// console.log(name);

let x="   ILoveCoding   ";
console.log(x);
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.indexOf("Love"));
console.log(x.toLowerCase().trim());
x=x.trim();
console.log(x.slice(1,5));
console.log(x.replace("Love","Do"));
console.log(x.repeat(3));
let marks=[10,9,5,8];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
marks.push(15);
console.log(marks);
marks.pop();
console.log(marks);