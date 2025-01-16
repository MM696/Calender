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

// Getting formated date from date string
let deadline = new Date("dec 25, 2025 00:00:00").getTime();

// Calling defined function at certain interval
let x = setInterval(function () {
  // Getting current date and time in required format
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;

  // Getting values of days,hours,minutes, seconds
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Show the output time
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // Show overtime output
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);
