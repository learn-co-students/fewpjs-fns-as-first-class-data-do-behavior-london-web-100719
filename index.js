/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hourTime = parseInt(timeString.split(":")[0])
  if (hourTime < 12) {
    return "Good Morning"
  } else if (hourTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  greeting = document.getElementById("greeting")
  greeting.innerText = message
}
/* Write your implementation of displayMessage() */
