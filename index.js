import { parse } from "path";

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = timeString.split(':');
  let hours = parseInt(time[0]);
  if (hours < 12) {
    return "Good Morning";
  } else if (12 < hours && hours < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}
