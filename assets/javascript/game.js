$(document).ready(function () {
    //declare variables globally
    var gem1, gem2, gem3, gem4;
    var randomNumber, playerScore;
    var wins = 0;
    var losses = 0;
    var music = document.createElement("audio");

    //this function creates a random arbitrary number
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function reset() {
        //in reset, the random number  and gem values are assigned again 
        randomNumber = getRandomInt(19, 120);
        console.log("this is random number " + randomNumber);

        playerScore = 0;
        $("#playerScore").text(playerScore);

        $("#randomNumber").text(randomNumber);

        gem1 = getRandomInt(1, 12);
        console.log("this is gem1 value " + gem1);
        gem2 = getRandomInt(1, 12);
        console.log("this is gem2 value " + gem2);
        gem3 = getRandomInt(1, 12);
        console.log("this is gem3 value " + gem3);
        gem4 = getRandomInt(1, 12);
        console.log("this is gem4 value " + gem4);

    }

    function game() {
        //if user score and random number are equal, win+1, update the score, play applause, reset the game
        if (playerScore >= randomNumber) {
            if (playerScore == randomNumber) {
                wins++;
                $("#wins").text(wins);
                // alert("Congrats! You win!");
                $("#result").text("You win!");
                music.setAttribute("src", "assets/sound/applause.mp3");
                music.play();
                reset();
            }
            else {
                losses++;
                $("#losses").text(losses);
                $("#result").text("You lost!");
                // alert("You lost!");
                music.setAttribute("src", "assets/sound/fail.mp3");
                music.play();
                reset();
            }
        }
    }
    reset();


    //create 4 onclick functions for each gem
    //when each gem is clicked, add gem value to the score and play gem sound
    //display the player score and then call the score function to see if the player win
    $("img").hover(function () {
        $(this).css("background-color", "red");
        $("#gem1").on("click", function () {
            playerScore += gem1;
            // music.setAttribute("src", "assets/sound/gem1.mp3");
            // music.play();
            $("#playerScore").text(playerScore);
            game();

        });
    });

    $("#gem2").on("click", function () {
        playerScore += gem2;
        // music.setAttribute("src", "assets/sound/gem2.mp3");
        // music.play();
        $("#playerScore").text(playerScore);
        game();

    });

    $("#gem3").on("click", function () {
        playerScore += gem3;
        // music.setAttribute("src", "assets/sound/gem3.mp3");
        // music.play();
        $("#playerScore").text(playerScore);
        game();

    });

    $("#gem4").on("click", function () {
        playerScore += gem4;
        // music.setAttribute("src", "assets/sound/gem4.mp3");
        // music.play();
        $("#playerScore").text(playerScore);
        game();

    });

    //reset function to reset wins & losses
    $("#reset").on("click", function () {
        wins = 0;
        losses = 0;

        $("#wins").text(wins);
        $("#losses").text(losses);

        reset();
    });

});