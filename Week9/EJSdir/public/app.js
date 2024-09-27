const button=document.querySelectorAll("button");

for(btn of button){
    btn.addEventListener("click",()=>{
        console.log("Button was clicked");
    });
}