var documentObject = $(document);
var windowObject = $(window);
var boy = $('#boy');
var girl = $('#girl');
var playerName = $('#name');
var startGameButton = $('#startGameButton');
var startMenu = $('#startMenu');
var gameArea = $('#gameArea');
var currentGender = gameData.player.gender;
var currentName = gameData.player.name;


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