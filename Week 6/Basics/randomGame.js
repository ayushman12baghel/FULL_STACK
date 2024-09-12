const max=prompt("Enter the max number: ");
const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congrats");
        break;
    }else if(guess<random){
        guess=prompt("please enter larger number");
    }
    else{
        guess=prompt(" your guess was wrong please try again");
    }

}