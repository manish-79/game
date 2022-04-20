var buttonColours = [];
buttonColours[0] = "red";
buttonColours[1] = "blue";
buttonColours[2] = "green";
buttonColours[3] = "yellow";

var gamePattern = [];


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    $("#" + randomChosenColour).on("click",function(){
        alert("hi");
        // $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        
    });
}
nextSequence();






