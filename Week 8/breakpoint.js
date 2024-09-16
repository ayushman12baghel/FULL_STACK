// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans= two()+one();
//     console.log(ans);
// }

// three();

let h1=document.querySelector("h1");
function  changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed");
    },delay);
});
}
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
     console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
});

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("green",1000);
//         });
//     });
// });

// function saveToDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// saveToDb("ayushman",()=>{
//     console.log("Your data was saved");
//     saveToDb("baghel",
//     ()=>{
//         console.log("success2");
//     },
//     ()=>{
//         console.log("failure2");
//     }
// );
// },
// ()=>{
//     console.log("weak connection data was not saved");
// }
// );

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10);
//         if(internetSpeed>4){
//             resolve("data was saved");
//         }
//         else{
//             reject("error!");
//         }
//     });
// }
// saveToDb("ayushman").then(()=>{
//     console.log("promise resolved");
//     return saveToDb("hello world")
// })
// .then(()=>{
//     console.log("data2 was saved");
// })
// .catch(()=>{
//     console.log("promise rejected");
// });