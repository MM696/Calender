<<<<<<< HEAD:2.0 Christmas_Calender/index.js
// Select the body using classlist
document.querySelector("body").classList.add("style");

// Select the button using its ID
// Select the button
var button = document.querySelector("a");

// Add a click event listener
button.addEventListener("click", function () {
    // Add the 'pressed' class to the button
    button.classList.add("pressed");

    // Remove the 'pressed' class after 100ms
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
});
=======
// Select the body using classlist
document.querySelector("body").classList.add("style");

// Select the button using its ID
// Select the button
var button = document.querySelector("a");

// Add a click event listener
button.addEventListener("click", function () {
    // Add the 'pressed' class to the button
    button.classList.add("pressed");

    // Remove the 'pressed' class after 100ms
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
});
>>>>>>> cc2e572679062596ebe336a27cc7d8eb54f93a48:Christmas_Calender/index.js
