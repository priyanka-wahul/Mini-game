const max = prompt("guess the maximum number");


const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number ");

let result = document.getElementById("result")

while(true){
    
    if(guess=="quit"){
      //   console.log("quitting game");
      result.innerHTML="you quit";
        break;
    }
    else if(guess==random){
       result.innerHTML="you are write! congrats!! your number was "+ random + " ";
     break;
     }else if(guess < random){
        guess = prompt("hint : your guess was too small! Please try again");
     }else{
        guess = prompt("hint : your guess was too large! Please try again");
     }
   }