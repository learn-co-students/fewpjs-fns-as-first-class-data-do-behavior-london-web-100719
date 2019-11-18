/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = parseInt(timeString.split(":"));

  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(displayString) {
  document.querySelector("#greeting").innerText = displayString;
}
