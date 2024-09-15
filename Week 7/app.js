//forEach

// let arr=[1,2,3,4,5];
// function print(arr){
//     for( i of arr){
//         console.log(i);
//     }
// }
// print(arr);

// function print2(el){
//     console.log(el);
// }

// arr.forEach(print2);

//map

// let arr=[1,2,3,4,5];

// let double=arr.map((a)=>{
//     return a*2;
// })

// for(let i=0;i<double.length;i++){
//     console.log(double[i]);
// }


// filter

// let arr=[1,2,3,4,5];
// let nums=arr.filter((a)=>{
//     return a%2==0;
// });
// for(let i=0;i<nums.length;i++){
//     console.log(nums[i]);
// }

//every

// let arr=[2,4,6,8];

// let x=arr.every((a)=>{
//     return a%2==0;
// })
// console.log(x);

//reduce

// let arr=[1,2,3,4,5];
// let x=arr.reduce((a,b)=>(a+b));
// console.log(x);

// let max=arr.reduce((x,y)=>{
//     if(x>y){
//         return x;
//     }
//     return y;
// });
// console.log(max);

// practice 1 is every element in arr is mult of 10?

// let arr=[10,20,30,40,50];
// let x=arr.every((a)=>a%10==0);
// console.log(x);

// practice 2 find min in arr;

// let arr=[1,5,1,7,8,3,-5];
// let min=arr.reduce((a,b)=>{
//     if(b>a){
//         return a;
//     }
//     return b;
// });
// console.log(min);

// default parameter

// function sum(a,b=3){
//     console.log(a+b);
// }
// sum(4);
// sum(4,10);

//spread

// let arr=[1,2,3,4,5,6,-5];

// console.log(Math.min(...arr));
// console.log(...arr);
// console.log("Ayushman");
// console.log(..."Ayushman");

// let newArr=[...arr];
// console.log(newArr);
// let str="Ayushman";
// let newStr=[...str];
// console.log(newStr);

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];
// let x=[...odd,...even];
// console.log(x);

// function sum(...args){
//     return args.reduce((a,b)=>(a+b));
// }
// console.log(sum(1,2,3,4,5));

//practice 1

// let arr=[1,2,3,4,5];
// const square=arr.map((num)=>num*num);
// let sum=square.reduce((a,b)=>a+b);
// let avg=sum/arr.length;
// console.log(avg);

// practice 2

// let arr=[1,2,3,4,5];
// let newArr=arr.map((a)=>a+5);
// console.log(...newArr);

//practice 3

// let name="ayushman";
// let str=name.split("");
// console.log(str);
// let newStr=str.map((a)=>a.toUpperCase());
// console.log(newStr);

//practice 4
