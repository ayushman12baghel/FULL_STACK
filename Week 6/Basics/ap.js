// for(let i=0;i<10;i++){
//     console.log(i);
// }
//odd numbers
// for(let i=1;i<=15;i+=2){
//     console.log(i);
// }
// //even numbers
// for(let i=2;i<=16;i+=2){
//     console.log(i);
// }

// let n=prompt("Enter the number: ");
// n=parseInt(n);
// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }
// let x=5;
// while(x!=50){
//     console.log(x);
//     x+=5;
// }

// const name="Ayushman";
// let x=prompt("Enter the name: ");
// while((x != name) || x=="Quit"){
//     x=prompt("Enter the correct name: ");
// }

// let fruits=["Banana","Mango","Grapes","Orange",'Pineapple'];
// for(let i=0;i<fruits.length;i++){
//     console.log(i+1,fruits[i]);
// }

// let name="ayushman";
// for(char of name){
//     console.log(char);
// }

let arr1=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==num){arr1.splice(i,1);

    }
}
// console.log(arr1);
// let number1=287152;
// let count=0;
// let copy=number1;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);
// let number=287152;
// let sum=0;
// let copy2=number;
// while(copy2>0){
//     digit=copy2%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);
// let n=5;
// let factorial=1;
// for(leti=1;i<=n;i++){
//     factorial*=i;
// }
// console.log(`factorial of ${n} is ${factorial}`);
let arr=[2,5,10,4,2,7,1,9];
let largest=0;
for(leti=0;i<=arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);
