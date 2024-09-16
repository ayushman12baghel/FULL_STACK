let button=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
button.addEventListener("click",function(){
    let item=document.createElement("li");
    ul.appendChild(item);
    item.innerText=input.value;
    input.value="";


    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");
    item.appendChild(del);
});

// let dels=document.querySelectorAll(".delete");
// for(btn of dels){
//     btn.addEventListener("click",function(){
        
//         let par=this.parentElement;
//         par.remove();
//     });
// }

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})