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
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color=color;
            console.log(color);
            resolve("color changed");
    },delay);
});
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellowgreen",1000);

    }
    catch(err){
        console.log(err);
    }
            
    let a=5;
    console.log(a);

}

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//      console.log("green color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// });

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

// async function greet(){
//     return "hello world";
// }
// greet()
// .then((result)=>{
//     console.log("promise was successful");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("error caught");
//     console.log(error);
// });

// let demo=async()=>{
//     return 5;
// }

// function getNumber(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//        },1000);
//     })
// }
// async function demo(){
//     await getNumber();
//     await getNumber();
//     await getNumber();
//     getNumber();
// }