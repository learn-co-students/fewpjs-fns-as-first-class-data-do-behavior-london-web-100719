/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {

  let greeting = []
  const hour = parseInt(timeString.split(":")[0], 10)
  debugger
  if (hour<12) {
    greeting.push("Good Morning");
  } else if (12<= hour && hour <= 17 ){
    greeting.push("Good Afternoon");
  } else
  {
    greeting.push("Good Evening") ;
  }

  return greeting[0]
}

/* Write your implementation of displayMessage() */

function displayMessage(inputString){

  document.querySelector("#greeting").innerText = inputString

}