let username= prompt(`Welcome to the arcade! Please enter your name to get started:`);
let player= `${username}`;
if (player===null){
    alert(`please reload page, and enter a name`)
} else {}
let playSessionState=`inactive`

//play session button 
function runPlaySession(){
    playSessionState=`active`;
    //creating the gameplay buttons AFTER the playsession has started
    document.getElementById("BNHButton").innerHTML= `<button onclick="runBNH()">Bear, Ninja, Hunter</button>`;
    document.getElementById("guessingGameButton").innerHTML= `<button onclick="runGuessingGame()">Guessing Game</button>`;
    document.getElementById("magic8BallButton").innerHTML= `<button onclick="runMagic8Ball()">Magic Eight Ball</button>`;
}
let numGames=0
let numWins=0
let numLosses=0
//game functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!(easy to see when functions are not collapsed)
function runBNH(){
    //1 set up do loop for repeated gameplay
    let repeatGame = null
        do {

    //2 Prompt the player's choice. and make case insensitive 
    let playerChoice=`nothing`
        while ((playerChoice != `Bear`) || (playerChoice != `Ninja`) || (playerChoice != `Hunter`)){
            let playerChoiceCaseSensitive=prompt(`Who are you: Bear, Ninja, or Hunter?`);
            let playerChoiceLowerCase=playerChoiceCaseSensitive.toLowerCase();
            playerChoice=playerChoiceLowerCase[0].toUpperCase()+playerChoiceLowerCase.slice(1);
                if ((playerChoice != `Bear`) && (playerChoice != `Ninja`) && (playerChoice != `Hunter`)) {
                    alert(`invalid choice, please restart game and put in a valid option`);
                } else {
                    break;
                }
        }
    //3. Print the personalized game results to the html page and the console as depicted in Step 3 above, HTML on one side, the console output on the other.
    document.getElementById('Playerchoice').innerHTML= player + `, you picked ` + playerChoice +`!`;
    console.log(player + `, you picked ` + playerChoice + `!`);
    alert(player + `, you picked ` + playerChoice + `!`);

    //4computer choice in array 
    const computerChoiceArray=[`Bear`,`Ninja`,`Hunter`];

    //5computer's "decision"
    let RNG=Math.floor(Math.random()*computerChoiceArray.length);
    let computerChoice= computerChoiceArray[RNG];
    const computer= `computer`;
    document.getElementById('Computerchoice').innerHTML= `The ` + computer + `, picked ` + computerChoice + `!`;
    console.log(`The ` + computer + `, picked ` + computerChoice + `!`);
    alert(`The ` + computer + `, picked ` + computerChoice + `!`);

    //6switch board for user choice. going with nested switch since we have 2 variables to make the decision with.
    let winResult
    switch(true){ 
        case (playerChoice == `Bear` && computerChoice ==`Bear`): 
        case (playerChoice == `Ninja` && computerChoice == `Ninja`):
        case (playerChoice == `Hunter` && computerChoice == `Hunter`):
            winResult= `tiegame`
            break; 
        case (playerChoice == `Bear` && computerChoice == `Ninja`):
        case (playerChoice == `Ninja` && computerChoice == `Hunter`): 
        case (playerChoice == `Hunter` && computerChoice == `Bear`): 
            winResult= `playerwin`
            break;
        case (playerChoice == `Bear` && computerChoice == `Hunter`): 
        case (playerChoice == `Ninja` && computerChoice == `Bear`):
        case (playerChoice == `Hunter` && computerChoice == `Ninja`): 
            winResult= `computerwin` 
            break;
    }

    //7final if else statement RETURN TO HERE LATER!!!
    let result= null
    if (winResult==`playerwin`) {
        result= `You win!`;
        numWins+=1
        numGames+=1
    } else if (winResult==`tiegame`) {
        result=`It\'s a tie`;
    } else if (winResult==`computerwin`) {
        result=`Computer wins!`;
        numLosses+=1
        numGames+=1
    } else { 
        console.log(`error, no win condition found`);
    }
    alert(result);

    //other half of do loop. 
        repeatGame= prompt(player + `, would you like to keep playing this game? y/n`);
    }
        while (repeatGame.toLowerCase()===`y`? true : false);

    endPlaySession()
}
let runGuessingGame=function(){
    do {
        //set up for the random number generation, and variable definition
        randomNumber = Math.floor(Math.random() * 10) +1;
        //I guess this bit is necessary? it doesn't match the output that you showed but it was listed as necessary so I'm including it. 
        document.getElementById("randomNumber").innerHTML = randomNumber;
        console.log(randomNumber);
        let guess=null
        let guessCount=0

        //beginning of loop
        while (guess!==randomNumber) { 
            //guess counter
            guessCount+=1;
            let guess=prompt(`Guess a number between 1 and 10`);
            //turning guess into int so it doesn't need to be case sensitive. if I had the player adding any strings then it might need to be case sensitive but they're not
            guess=parseInt(guess)

            if (guess>randomNumber) { 
                alert(`Guess was too high, guess again`);
                numLosses+=1
                numGames+=1
            } else if (guess<randomNumber) {
                alert(`Guess was too low, guess again`);
                numLosses+=1
                numGames+=1
            // still feels weird to purposefully not put a condition in for the else part of the statement. 
            } else {
                alert(`You're correct. You guessed it in ` + guessCount + ` guesses!`);
                numWins+=1
                numGames+=1
            }

            if (randomNumber===guess) {
                break; 
            } else {}
        }
    repeatGame=prompt(player + `, would you like to keep playing this game? y/n`)
    }
    while (repeatGame.toLowerCase()===`y`? true : false);
    endPlaySession(); 
}
let runMagic8Ball=()=>{
    //array with answers
    const answerArray=[`signs point to yes`, `yuuuuup`,`sure, why not?`, `hmmmmmm, come back later, I\'m napping`, `I don\'t know, ask a different magic 8 ball`, `ehhhh, not likely no`, `HAHAHAHAHAHA!!!, wait you\'re serious? no!`, `nope`]

    //set up do loop 
    let repeat=null
    do {
        //random number generator 
        let RNG=Math.floor(Math.random()*answerArray.length);
        let m8ball = answerArray[RNG];

        //ask a question
        prompt(`ASK A YES OR NO QUESTION AND I SHALL ANSWER!!!`)

        //response 
        alert(m8ball)
        switch (RNG){
            case (0): 
            case (1):
            case (2):
                numWins+=1;
                numGames+=1;
                break;
            case (3):
            case (4):
                numGames+=1;
                break;
            case (5):
            case (6):
            case (7):
                numLosses+=1
                numGames+=1
        }

        //other half of do loop. 
        repeat= prompt(player + `, would you like to keep playing this game? y/n`);
    }
    while (repeat.toLowerCase()===`y`? true : false);

    endPlaySession();
}

//end of play session if else tree. not loop ironically enough. so no T operator
function endPlaySession(){ 
    let conSession= prompt(player + `, Would you like to pick another game to play?  y/n`);
    if (conSession.toLowerCase()=== `y`){
        playSessionState=`active`;
    } else if (conSession.toLowerCase()===`n`){
        playSessionState=`inactive`;
        alert (`thanks for playing, hope to see you again`);
        document.getElementById("reloadButton").innerHTML=`<button onclick="location.reload()"> reload fresh page </button>`;
        //change to percent
        let percentGamesWon=numWins/numGames*100
        let percentGamesLoss=numLosses/numGames*100
        //statistics table.
        statistics=`<table>
        <tr>
            <th>Total Games.</th>
            <th>Wins</th>
            <th>Losses</th>
        </tr>
        <tr>
            <td>${numGames}</td>
            <td>${numWins}</td>
            <td>${numLosses}</td>
        </tr>
        <tr>
            <td> win/loss percentage (taking into account tie/neutral games)</td>
            <td> ${percentGamesWon}%</td>
            <td> ${percentGamesLoss}%</td>`
        
        document.getElementById("statisticsTable").innerHTML=statistics;
        //award badge switch
        let award=null
        switch(true){
            case(percentGamesWon>=0 && percentGamesWon<=25):
                award=`stone`;
                break;
            case(percentGamesWon>25 && percentGamesWon<=50):
                award=`bronze`;
                break;
            case(percentGamesWon>50 && percentGamesWon<=75):
                award=`iron`;
                break;
            case(percentGamesWon>75 && percentGamesWon<=100):
                award=`silicon`;
                break;
            
        }
        document.getElementById("award").innerHTML=`Congratulations, you won the ${award} badge! `
    } else {
        alert(`invalid choice, please select y or n`);
    }
}