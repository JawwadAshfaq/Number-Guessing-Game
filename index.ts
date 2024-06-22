#! usr/bin/env node

import inquirer from "inquirer"

//STEP 1 COMPUTER WILL GENERATE A RANDOM NUMBER

//STEP 2 USER INPUT FOR GUESSING NUMBER

//STEP 3 COMPARE USER INPUT WITH COMPUTER GENERATED NUMBER

const randomNumber = Math.floor(Math.random() * 10 + 1); 

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess Exact Number Between 1 to 10"
    }
]);

console.log(answers);

if(answers.userGuessNumber === randomNumber){
    console.log("Congratulations you guessed right number");
}else{
    console.log("You guessed wrong number");
}


// sb se start mai 1 line likhi hai wo npm pr code publish krne k liye likhi hai

/* math.random ki help se hum koi bh number generate krwa skty hain mai ne 10 limit laga hai
means 0 to 10*/

 
