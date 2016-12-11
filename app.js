var documentObject = $(document);
var windowObject = $(window);
var startGameForm = $('#startGame');
var startGameButton = $('#startGameButton');
var boy = $('#boy');
var girl = $('#girl');
var playerName = $('#name');



windowObject.on('load', function () {
    if (!gameData.formFields.name || !gameData.formFields.gender) {
        startGameButton.attr('disabled', true);
    }
    playerName.on('change', function () {
        var valueSelected = this.value;
        gameData.formFields.name = true;
        if (valueSelected !== "" && gameData.formFields.gender && gameData.formFields.name) {
            startGameButton.removeAttr('disabled');
            gameData.player.name = valueSelected;
        } else if (valueSelected === "") {
            gameData.formFields.name = false;
            startGameButton.attr('disabled', true);
        }
    });
    
    boy.on('click touchend', function () {
        boy.parent().removeClass('active');
        girl.parent().removeClass('active');
        $(this).parent().addClass('active');
    });
    
    girl.on('click touchend', function () {
        boy.parent().removeClass('active');
        girl.parent().removeClass('active');
        $(this).parent().addClass('active');
    });
    
});

startGameButton.on('click touchend', function (e) {
   e.preventDefault(); 
    
});

