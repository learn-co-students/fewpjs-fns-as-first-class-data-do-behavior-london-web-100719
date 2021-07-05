/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timearray = time.split(":");  
  let times = parseInt(timearray[0]);

  if (times < 12 && times > 0) {
    return("Good Morning");
  } else if (times >= 12 && times < 17){
    return("Good Afternoon");
  } else {
    return("Good Evening");
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(text) {
  let node = document.getElementById("greeting");
  node.innerText = `${text}`
}