var documentObject = $(document);
var windowObject = $(window);
var boy = $('#boy');
var girl = $('#girl');
var playerName = $('#name');
var startGameButton = $('#startGameButton');
var continueButton = $('#continueButton');
var startMenu = $('#startMenu');
var gameArea = $('#gameArea');
var gameButtons = $('#gameButtons');
var currentGender = gameData.player.gender;
var currentName = gameData.player.name;

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

windowObject.on('load', function () {
    if (currentName === "" || currentGender === "") {
        startGameButton.attr('disabled', true);
    }
    
    boy.on('click touchend', function () {
        boy.parent().removeClass('active').removeClass('deactive');;
        girl.parent().removeClass('active').addClass('deactive');
        $(this).parent().addClass('active');
        currentGender = "Boy";
        if (playerName.val() !== "" ) {
            startGameButton.removeAttr('disabled');
        }
    });
    
    girl.on('click touchend', function () {
        boy.parent().removeClass('active').addClass('deactive');
        girl.parent().removeClass('active').removeClass('deactive');
        $(this).parent().addClass('active');
        currentGender = "Girl";
        if (playerName.val() !== "" ) {
            startGameButton.removeAttr('disabled');
        }
    });
    
    playerName.on('change', function () {
        var valueSelected = this.value;
        currentName = valueSelected;
        if (valueSelected !== "" && currentGender !== "") {
            startGameButton.removeAttr('disabled');
        } else if (valueSelected === "") {
            currentName = "";
            startGameButton.attr('disabled', true);
        }
    });
});

startGameButton.on('click touchend', function (e) {
    e.preventDefault(); 
    startMenu.remove();
    startGame(); // Starting the Game!!!!!!!!!!!!!!!
});

function startGame() {
    gameArea.fadeIn(500);
    $('#nameArea').html(currentName);
    
    if (currentGender === "Girl") {
        $('#playerGirl').show(); 
    } else {
        $('#playerBoy').show();
    }
}

continueButton.on('click touchend', function () {
    var gameButtonsCreate = gameData.games.map(function (game) {
        var name = game.id;
       return '<button onclick="gameSelectFunction(\'' + name + '\')" id="' + game.id + '" type="button" class="game-btn">' + game.name + '</button>';
    });
    gameButtons.html(gameButtonsCreate);    
    $('#stepOne').hide();
    $('#stepTwo').show();
    continueButton.hide();
});

function gameSelectFunction(game) {
    if (game === 'numbersGame') {
        numbersGame();
    }
}

function solutionInputChange() {
    return Number($('#solution').val());
}

function numbersGame() {
    $('#stepTwo').hide();
    gameButtons.hide();
    
    if (gameData.games[3].score === 3) {
        gameData.games[3].firstNumber = 19;
    }
    
    if (gameData.games[3].score === 6) {
        gameData.games[3].firstNumber = 9;
        gameData.games[3].symbol = '-';
    }
    
    var symbol = gameData.games[3].symbol;
    var numberOne = randomIntFromInterval(1, gameData.games[3].firstNumber);
    var numberTwo = randomIntFromInterval(1, gameData.games[3].secondNumber);
    var solution = eval(numberOne + symbol + numberTwo);
    gameData.games[3].solution = solution;
    console.log(gameData.games[3]);
    gameArea.append('<form id="numbersGameWrapper" onsubmit="return solutionSubmit(' + solution +')"></form>');
    $('#numbersGameWrapper').append('<div id="numberOne">' + numberOne +'</div><span class="symbol">' + symbol + '</span><div id="numberTwo">' + numberTwo +'</div><hr /><input type="text" class="solution" id="solution" autocomplete="off" />');
    $('#solution').focus();
}

$(window).on('keydown', function(e) {
    if (e.which == 13 && !$('#solution').focus()) {
        solutionSubmit(gameData.games[3].solution);
    }
});

function solutionSubmit(solution) {
    var total = solutionInputChange();
    if (solution === total) {
        $('#numbersGameWrapper').append('<h2>&check; Good Job!</h2>');
        $('#solution').addClass('correct');
    } else {
        $('#numbersGameWrapper').append('<h2>&times; Try again</h2>');
        $('#solution').addClass('wrong');
    }
    
    window.setTimeout(function() {
        $('#numbersGameWrapper h2').fadeOut(500);
        $('#solution').removeClass('wrong', 'correct');
        if (solution === total) {
            gameData.games[3].score += 1; 
            $('#numbersGameWrapper').remove();
            numbersGame();
        }
    }, 3000);
    return false;
};





