/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

/* 1st attempt
function greet(timeString) {
  const timeArr = timeString.split(":");
  const hour = parseInt(timeArr[0]);

  if (hour > 0 && hour < 12) {
    return "Good Morning";
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
*/

function greet(timeString) {
  const hour = parseInt(timeString, 10);

  if (hour < 12) return "Good Morning";
  if (hour > 17) return "Good Evening";
  return "Good Afternoon";
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string;
}
