// let button=document.querySelector("button");
// console.dir(button);
// button.onclick=function(){
//     console.log("Button was clicked");
// }

// let buttons=document.querySelectorAll('button');
// for(btn of buttons){
    // btn.onmouseenter=function (){
    //     console.log("You entered the button");
    // }
    // btn.onclick=sayHello;

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",function(){
    //     console.log("Ayushman");
    // });
//     btn.addEventListener("dblclick",function(){
//         console.log("u double clicked");
//     });
// }

// function sayHello(){
//     console.log("Hello");
// }

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector('p');

// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="blue";
//     console.dir(btn.innerText);
// });
// h1.addEventListener("click",function(){
//     h1.style.backgroundColor="blue";
//     console.dir(h1.innerText);
// });
// h3.addEventListener("click",function(){
//     h3.style.backgroundColor="blue";
//     console.dir(h3.innerText);
// });
// p.addEventListener("click",function(){
//     p.style.backgroundColor="blue";
//     console.dir(p.innerText);
// });
// function changeColor(){
//     this.style.backgroundColor="blue";
//     console.dir(this.innerText);
// }
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);


// let button=document.querySelector("button");
// button.addEventListener("click",function(){
//     console.log(event);
//     console.log("Clicked");
// })
// button.addEventListener("dblclick",function(){
//     console.log(event);
//     console.log("Double Clicked");
// })


// let input=document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("key was pressed !");
// });
// input.addEventListener("keydown",function(){
//     if(event.key=="ArrowUp"){
//         console.log("Up key is pressed");
//     }else if(event.key=="ArrowDown"){
//         console.log("Down key is pressed");
//     }else if(event.key=="ArrowRight"){
//         console.log("Right key is pressed");
//     }else if(event.key=="ArrowLeft"){
//         console.log("Left key is pressed");
//     }else{
//         console.log("Please press correct key");
//     }
// });

let form=document.querySelector("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    // console.log("Form Submitted");
    // let input=document.querySelector("input");
    // console.dir(input);
    // console.log(input.value);

    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    // console.log(user.value);
    // console.log(pass.value);
});

let user=document.querySelector("body");

window.addEventListener("load",function(){
    console.log("load event");
})