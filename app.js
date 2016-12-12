var documentObject = $(document);
var windowObject = $(window);
var startGameForm = $('#startGame');
var startGameButton = $('#startGameButton');
var boy = $('#boy');
var girl = $('#girl');
var playerName = $('#name');



windowObject.on('load', function () {
    if (playerName.val() === "" || gameData.player.gender === "") {
        startGameButton.attr('disabled', true);
    }
    
    boy.on('click touchend', function () {
        boy.parent().removeClass('active');
        girl.parent().removeClass('active');
        $(this).parent().addClass('active');
        gameData.player.gender = "Boy";
        if (playerName.val() !== "" ) {
            startGameButton.removeAttr('disabled');
        }
    });
    
    girl.on('click touchend', function () {
        boy.parent().removeClass('active');
        girl.parent().removeClass('active');
        $(this).parent().addClass('active');
        gameData.player.gender = "Girl";
        if (playerName.val() !== "" ) {
            startGameButton.removeAttr('disabled');
        }
    });
    
    playerName.on('change', function () {
        var valueSelected = this.value;
        if (valueSelected !== "" && gameData.player.gender !== "") {
            startGameButton.removeAttr('disabled');
            gameData.player.name = valueSelected;
        } else if (valueSelected === "") {
            gameData.player.name = "";
            startGameButton.attr('disabled', true);
        }
    });
});

startGameButton.on('click touchend', function (e) {
   e.preventDefault(); 
    
});

