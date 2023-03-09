(function(){
    "use strict"
    console.log("JS running");

    const startGame = document.querySelector("#startgame");
    const gameControl = document.querySelector("#gamecontrol");
    const game = document.querySelector("#game");
    const score = document.querySelector("#score");
    const actionArea = document.querySelector("#actions");
    const form = document.querySelector ("form");
    const dedoop = new Audio("sound/dedoop.mp4");
    const naur = new Audio("sound/naur.mp4");
    const wohoo = new Audio("sound/wohoo.mp4")

    const gameData ={
        dice: ["images/unicorn1.png", "images/unicorn2.png","images/unicorn3.png","images/unicorn4.png", "images/unicorn5.png", "images/unicorn6.png"],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0, 
        index: 0,
        gameEnd: 29 //can sent to any number want to be at end of the game (must reach this number to win)
    }


    form.addEventListener("submit", function(event){
        event.preventDefault();
        gameData.index = Math.round(Math.random());
        const player1 = document.querySelector("#player1").value;
        const player2 = document.querySelector("#player2").value;

        const playerData = {
            players: [player1, player2]
        }

        setUpTurn();
        dedoop.play();

        function setUpTurn(){
            game.innerHTML = `<p>Roll the dice for ${playerData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id = "roll">Roll the Dice</button>';
            document.getElementById("roll").addEventListener("click", function(){
                throwDice();
            });
        };
    
        function throwDice(){
            actionArea.innerHTML = "";
            gameData.roll1 = Math.floor(Math.random()*6) +1;
            gameData.roll2 = Math.floor(Math.random()*6) +1;
            game.innerHTML = `<p>Roll the dice for the ${playerData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}" class= "dice">`;
            game.innerHTML += `<img src = "${gameData.dice[gameData.roll2-1]}" class = "dice">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
    
            if(gameData.rollSum == 2){
                game.innerHTML += "<p>Oh naur! Snake Eyes!</p>";
                gameData.score [gameData.index] = 0; 
                gameData.index ? (gameData.index = 0) : (gameData.index = 1); //if this is true set to 0, if this is false set it to one 
                setTimeout(setUpTurn, 2000);
                showCurrentScore();
                naur.play();

    
            } else if (gameData.roll1 == 1 || gameData.roll2 ==1){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML = `<p>Sorry, one of your rolls was a one. Switching to ${playerData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
    
            } else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Pass</button>';
    
                document.getElementById("rollagain").addEventListener("click", function(){
                    setUpTurn();
                });
    
                document.getElementById("pass").addEventListener("click", function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
    
                checkWinningCondition();
            }
        };
    
        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${playerData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
                actionArea.innerHTML = '<img src = "images/mainunicorn.png" id="unicorns">';
                game.innerHTML = "";
                wohoo.play();
            } else{
                showCurrentScore();
            }
        };
    
        function showCurrentScore(){
            score.innerHTML = `<div><p class="scoreheader">${playerData.players[0]}</p><p>Score: ${gameData.score[0]}</p></div>`
            score.innerHTML += `<div><p class="scoreheader">${playerData.players[1]}</p><p>Score: ${gameData.score[1]}</p></div>`
        };

        
        document.querySelector("#first").style.display = "none";
        document.querySelector("#second").className = "showing";
    });
    

    // startGame.addEventListener("click", function(){
    //     gameData.index = Math.round(Math.random());
    //     // gameControl.innerHTML = "<h2>The game has started</h2>";
    //     gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';
    //     document.getElementById("quit").addEventListener("click", function(){
    //         location.reload();
    //     });

        // console.log(gameData.index);
        // console.log("set up the turn");
        // += adds to previous HTML added

    //     setUpTurn();
    // });

   

})();