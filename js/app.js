//? 1. rock , scissors , paper oyunu qurun DOM istifade etmeden
//? prompt, alert ve s. tipli built-in func istifade ede bilersiniz


const attempt=5
let score={ computer: 0, you: 0}
function PlayGame(){
    for(let i=0; i<attempt;i++){
        let playerChoices=prompt(`Let select from ["Rock", "Paper", "Scissors"]`)
        let choices=["Rock", "Paper", "Scissors"]
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomElement = choices[randomIndex];
        if(playerChoices===randomElement){
            alert(`Computer chose ${randomElement}: Scoreless. Your score is ${score.you}, Computer Score is ${score.computer} `)
        }
        else if(
        (playerChoices=="Rock" && randomElement=="Paper")||
        (playerChoices=="Scissors" && randomElement=="Rock")||
        (playerChoices=="Scissors" && randomElement=="Paper")
        ){
            score.computer+=1
            alert(`Computer chose ${randomElement}: You lost. Your score is ${score.you}, Computer Score is ${score.computer} `)
        }
        else if(
            (playerChoices=="Paper" && randomElement=="Rock")||
            (playerChoices=="Rock" && randomElement=="Scissors")||
            (playerChoices=="Paper" && randomElement=="Scissors")){
                score.you+=1
                alert(`Computer chose ${randomElement}: You win. Your score is ${score.you}, Computer Score is ${score.computer} `)
            }
    }
    if(score.computer>score.you){
        alert("You Lost!")
    }
    else if(score.computer<score.you){
        alert("You Win!")
    }
    else{
        alert("Draw")
    }
}
PlayGame()




//? 2. eded texmin etme oyunu : 1-50 arasinda 3 defeye ededi texmin etmek  :

// function guessNumber() {
//     const attempts = 3;
//     let number = 5;
//     // console.log(choice)

//     for(let i=0; i<attempts; i++){
//         let choice = Number(prompt("Pick a number between 1 and 50. You have 3 changes."));

//             if (choice>50 || choice<1) {
//                 alert("Number must be between 1 and 50")
//                 // break
//             }else if(choice === number){
//                 alert("You win!")
//             }
//              else {
//             }
//             alert("You lost!")
//         }
//     }
// guessNumber()




//? 3. eded verilecek , meselen 45 , bundan sonra generate olunacaq random ededin 45-den boyuk ve ya kicik oldugunu texmin edin
//? currentnumber , nextnumber
//? texminler de "higher" , "lower"

// function guess() {
    
//     let nextNumber = Math.floor(Math.random()* 100)
//     const attempts = 1;
//     let currentNumber = Math.floor(Math.random()* 100);
//     // console.log(choice)

//     for(let i=0; i<attempts; i++){
//         let choice = prompt("Is the next number higher or lower than "+ currentNumber + "?");

//             if (choice !== "higher" && choice!== "lower") {
//                 alert("Please enter 'higher' or 'lower'")   
//             }

//             if((choice==="higher" && nextNumber>currentNumber) || (choice==="lower" && nextNumber<currentNumber)){
//                 alert("You win!")
//             }else{
//                 alert("You lost!")
//             }
//         }
//     }


// guess()