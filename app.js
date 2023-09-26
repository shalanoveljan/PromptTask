
let btn=document.querySelector('button');

btn.onclick=function checkAge() {
    const userAge = prompt("Please enter your age:");
    const age = parseInt(userAge);
    if (isNaN(age)) {
      alert("Invalid age input.");
    } 
    else if (age < 18)
     {
      alert("Warning: You are under 18 years old!");
    } 
    else
     {
      alert("You are 18 years old or older.");
    }
  }