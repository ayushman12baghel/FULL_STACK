// let button=document.querySelector("button");
// console.dir(button);
// button.onclick=function(){
//     console.log("Button was clicked");
// }

let buttons=document.querySelectorAll('button');
for(btn of buttons){
    // btn.onmouseenter=function (){
    //     console.log("You entered the button");
    // }
    // btn.onclick=sayHello;

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",function(){
    //     console.log("Ayushman");
    // });
    btn.addEventListener("dblclick",function(){
        console.log("u double clicked");
    });
}

function sayHello(){
    console.log("Hello");
}