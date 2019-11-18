/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeGiven){
  const hour = timeGiven.split(":")
  const time = parseInt(hour,10)
  if (time < 12){
    return "Good Morning"
  } else if (time < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}


/* Write your implementation of displayMessage() */

function displayMessage(message){
const greeting = document.getElementById("greeting")
greeting.innerText = message
}