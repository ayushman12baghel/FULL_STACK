// let image=document.getElementsByClassName("oldImg");

// for(let i=0;i<image.length;i++){
//     image[i].src="assets/spiderman_img.png";
//     console.log("Below images changed");
// }

// console.dir(document.querySelector(".oldImg"));

// let links=document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="red";
// }

// for(link of links){
//     link.style.color="green";
// }

// let head=document.querySelector("h1");
// // head.classList.add("classH1");

// // console.log(head.classList);
// // console.log(head.classList.contains("classH1"));

// console.log(head.children);

// let body=document.querySelector('body');
// let newP=document.createElement('p');
// newP.innerText="Hi this is new Paragraph";
// body.append(newP);
// body.prepend(newP);


// let box=document.querySelector(".box");
// let newP=document.createElement('p');
// newP.innerText="Hey this is new Para with red color";
// newP.style.color="red";
// box.append(newP);
// let body=document.querySelector("body");
// let h3=document.createElement("h3");
// h3.innerText="This is blue in color";
// h3.style.color="blue";
// // body.append(h3);
// let div=document.createElement('div');
// div.style.backgroundColor="pink";
// div.style.border="2px solid black";
// let h1=document.createElement('h1');
// h1.innerText="hi I am in a div";
// let p=document.createElement('p');
// p.innerText="me too";
// div.append(h1);
// div.append(p);
// let body=document.querySelector('body');
// body.append(div);

let body=document.querySelector('body');
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="Click me!";
body.append(input);
body.append(button);
input.placeholder="username";
button.id="btn";

let btn=document.querySelector("#btn");
btn.style.backgroundColor="green";
btn.style.color="white";

let h1=document.createElement('h1');
h1.innerText="DOM practice";
body.prepend(h1);
h1.style.textDecoration="underline";
h1.style.color="purple";
let p=document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);
