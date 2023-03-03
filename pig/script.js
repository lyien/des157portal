(function(){
    "use strict"
    console.log("JS running");

    const startGame = document.querySelector("#startgame");
    const gameControl = document.querySelector("#gamecontrol");
    const game = document.querySelector("#game");
    const score = document.querySelector("#score");
    const actionArea = document.querySelector("#actions");

    const gameData ={
        dice: ["1die.jpg", "2die.jpg","3die.jpg","4die.jpg", "5die.jpg", "6die.jpg"],
        players: ["player 1", "player2"],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0, 
        index: 0,
        gameEnd: 29 //can sent to any number want to be at end of the game (must reach this number to win)
    }

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = "<h2>The game has started</h2>";
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        document.getElementById("quit").addEventListener("click", function(){
            location.reload();
        });

        // console.log(gameData.index);
        // console.log("set up the turn");
        // += adds to previous HTML added

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id = "roll">Roll the Dice</button>';
        document.getElementById("roll").addEventListener("click", function(){
            throwDice();
        });
    };

    function throwDice(){
        actionArea.innerHTML = "";
        gameData.roll1 = Math.floor(Math.random()*6) +1;
        gameData.roll2 = Math.floor(Math.random()*6) +1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum == 2){
            game.innerHTML += "<p>Oh naur! Snake Eyes!</p>";
            gameData.score [gameData.index] = 0; 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //if this is true set to 0, if this is false set it to one 
            setTimeout(setUpTurn, 2000);
            showCurrentScore();

        } else if (gameData.roll1 == 1 || gameData.roll2 ==1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML = `<p>Sorry, one of your rolls was a one. Switching to ${gameData.players[gameData.index]}</p>`;
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
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = "";
            document.getElementById("quit").innerHTML = "Start a New Game";
        } else{
            showCurrentScore();
        }
    };

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`
    };

})();