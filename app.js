console.log(gameData);

var genderDorpdown = $('#genderDorpdown');


gameData.player.genders.forEach(function(gender){
    genderDorpdown.append($('<option>', {
        value: gender,
        text: gender
    }));
});
