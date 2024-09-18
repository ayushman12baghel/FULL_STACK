// let json='{"fact":"Cats take between 20-40 breaths per minute.","length":43}';
// console.log(json);
// let valid=JSON.parse(json);
// console.log(json);
// console.log(valid.fact);

// let student={
//     name:"Ayushman",
//     age:19
// }
// console.log(student);
// console.log(JSON.stringify(student));

// let url="https://catfact.ninja/fact";

// let url2="https://dog.ceo/api/breeds/image/random";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
//     return fetch(url);
// })
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// async function getFact(){
//     try{
//         let response=await fetch(url);
//         let data=await response.json();
//         console.log(data);

//         let response2=await fetch(url);
//         let data2=await response2.json();
//         console.log(data2);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getFact();

// let button=document.querySelector("button");

// button.addEventListener("click",async ()=>{
//     let image=await getImage();
//     let img=document.querySelector("img");
//     img.src=image;

// })

// async function getImage(){
//     try{
//         let response=await axios.get(url2);
//         return response.data.message;
//     }
//     catch(error){
//         console.log(error);
//         return "/";
//     }
// }


// let p=document.querySelector("p");
// button.addEventListener("click",async ()=>{
//     let fact=await getFacts();
//     p.innerText=fact;
// })

// async function getFacts(){
//     try{
//         let response=await axios.get(url);
//         return response.data.fact;
//     }
//     catch(error){
//         console.log(error);
//         return "No fact found";
//     }
// }

// let url="https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config={headers:{Accept:"application/json"}};
//         let result=await axios.get(url,config);
//         console.log(result.data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }


let url="http://universities.hipolabs.com/search?name=";
let button=document.querySelector("button");
button.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    let colleges=await getColleges(country);
    show(colleges);
});

function show(colleges){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerText=col.name;
        list.append(li);
    }
}

async function getColleges(country){
    try{
        let colleges=await axios.get(url+country);
        return (colleges.data);
    }
    catch(error){
        return (error);
    }
}