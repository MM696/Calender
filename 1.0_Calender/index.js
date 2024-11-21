//Add the sound Effect
var soundEffect = new Audio('sound/sound_1.mp3');
soundEffect.play();

// Function to add event listener and handle class toggling
function handleBoxClick(selector, className) {
    const box = document.querySelector(selector);
    if (box) {
        box.addEventListener("click", () => {
            box.classList.add(className);
            setTimeout(() => box.classList.remove(className), 5000);
        });
    } else {
        console.error(`Element with selector '${selector}' not found!`);
    }
}

// Array of box selectors and their corresponding classes
const boxes = [
    { selector: ".first", className: "pic1" },
    { selector: ".second", className: "pic2" },
    { selector: ".third", className: "pic3" },
    { selector: ".fourth", className: "pic4" },
    { selector: ".fifth", className: "pic5" },
    { selector: ".sixth", className: "pic6" },
    { selector: ".seventh", className: "pic7" },
    { selector: ".eight", className: "pic8" },
    { selector: ".nineth", className: "pic9" },
    { selector: ".tenth", className: "pic10" },
    { selector: ".eleventh", className: "pic11" },
    { selector: ".twelveth", className: "pic12" },
    { selector: ".thirteenth", className: "pic13" },
    { selector: ".fourteenth", className: "pic14" },
    { selector: ".fifteenth", className: "pic15" },
    { selector: ".sixteenth", className: "pic16" },
    { selector: ".seventeenth", className: "pic17" },
    { selector: ".eighteenth", className: "pic18" },
    { selector: ".nineteenth", className: "pic19" },
    { selector: ".twentieth", className: "pic20" },
    { selector: ".twentyfirst", className: "pic21" },
    { selector: ".twentysecond", className: "pic22" },
    { selector: ".twentythird", className: "pic23" },
    { selector: ".twentyfourth", className: "pic24" },
    { selector: ".twentyfifth", className: "pic25" }
];

// Loop through the boxes and apply the event listener
boxes.forEach(({ selector, className }) => handleBoxClick(selector, className));
