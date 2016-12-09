var documentObject = $(document);
var windowObject = $(window);
var genderDorpdown = $('#genderDorpdown');
var genderSelect = $('#genderDorpdown');
var startGameForm = $('#startGame');
var startGameButton = $('#startGameButton');
var playerName = $('#name');


gameData.player.genders.forEach(function(gender){
    genderDorpdown.append($('<option>', {
        value: gender,
        text: gender
    }));
});

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
    genderSelect.on('change', function () {
        var valueSelected = this.value;
        gameData.formFields.gender = true;
        if (valueSelected !== "" && gameData.formFields.gender && gameData.formFields.name) {
            startGameButton.removeAttr('disabled');
        } else if (valueSelected === "") {
            gameData.formFields.gender = false;
            startGameButton.attr('disabled', true);
        }
    });
});

startGameButton.on('click touchend', function (e) {
   e.preventDefault(); 
    
});

