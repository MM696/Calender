document.querySelector("body").classList.add("style");

//Add the sound effect
var soundEffect = new Audio('sound/sound_1.mp3');
                    soundEffect.play();

 
// Select the button using its ID
// Select the button
var button = document.getElementById("myButton");

// Add a click event listener
button.addEventListener("click", function () {
    // Add the 'pressed' class to the button
    button.classList.add("pressed");

    // Remove the 'pressed' class after 100ms
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
});
