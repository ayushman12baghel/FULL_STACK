// function rollDice(){
//     let random=Math.floor(Math.random()*6)+1;
//     console.log(random);
// }

// rollDice();

// let name="Ayushman";
// function printName(name){
//     console.log(name);
// }
// printName(name);


// function average(num1,num2,num3){
//     console.log((num1+num2+num3)/3);
//     // return 2;
// }
// let x=average(2,4,6);
// // console.log(x);

// let n=5;
// function generateTable(n){
//     for(let i=0;i<10;i++){
//         console.log(n*(i+1));
//     }
// }
// generateTable(n);

// let n=5;
// function calcSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }

//     return sum;
// }
// console.log(calcSum(n));

// function multiGreet(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("hello");
// }
// multiGreet(greet,6);

// const calculator={
//     num:55,
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// };

// console.log(calculator.add(5,6));
// console.log(calculator.sub(5,6));
// console.log(calculator.mul(5,6));
// console.log(calculator.num);


// practice 1

// let arr=[1,5,8,8,5,2,4,-6];
// let key=3;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>key){
//         console.log(arr[i]);
//     }
// }

//practice 2

// let str="abcdabcdefgggh";
// let ans="";
// let set=new Set();
// for(let i=0;i<str.length;i++){
//     set.add(str[i]);
// }
// for(let value of set){
//     ans+=value;
// }
// console.log(ans);

//practice 3
// let country=["Australia","Germany","United States of America"];
// let length=0;
// for(let i=0;i<country.length;i++){
//     if(country[i].length>length){
//         length=country[i].length;
//     }
// }
// for(let i=0;i<country.length;i++){
//     if(length==country[i].length){
//         console.log(country[i]);
//     }
// }

// practice 4
// count vowels

// let count=0;
// let str="Australia";
// for(let i=0;i<str.length;i++){
//     if(str[i].toLowerCase()=='a' || str[i].toLowerCase()=='e' || str[i].toLowerCase()=='i' || str[i].toLowerCase()=='o' || str[i].toLowerCase()=='u'){
//         count++;
//     }
// }
// console.log(count);

// practice 5
// random variable from start to end

// let start=5;
// let end=10;
// let random=Math.floor(Math.random()*(end-start))+start;
// console.log(random);

// this keyword

// const student={
//     name:"Ayushman",
//     age:19,
//     eng:82,
//     phy:91,
//     chem:94,
//     getAvg(){
//         console.log(this);
//         console.log((this.eng+this.chem+this.phy)/3);
//     }
// }

// try and catch

// try{
//     console.log(a+b);
// }catch{
//     console.log("Variable a and b is not defined! ");
// }

// Arrow function

// const sum=(a,b)=>{
//     console.log(a+b);
// }
// function mul(a,b){
//     console.log(a*b);
// }
// sum(4,5);
// mul(4,5);

// const sum=(a,b)=>
//     a+b
// ;

// let x=sum(4,5);
// console.log(x);


// settimeout
// console.log("Hi Everyone");

// setTimeout(()=>{
//     console.log("This line will execute after 4 seconds");
// },4000);

// set Interval

// console.log("Hi everyone");
// let id=setInterval(()=>{
//     console.log("This function will be visible for only 4 seconds");
// },4000);
// console.log(id);

// this with arrow function

// const student={
//     name:"Ayushman",
//     marks:95,
//     prop:this,//global scope
//     getName:function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);
//         return this.marks;
//     }
// };


// let id=setInterval(()=>{
//     console.log("Hello world");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Clear Interval ran");
// },10000);


// practice 1
// let arr=[1,2,3,4,5,6];
// let avg=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     sum/=arr.length;
//     return sum;
// }
// console.log(avg(arr));

// practice 2

// let isEven=(a)=>{
//     if(a%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(4));


// practice 3
const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);
