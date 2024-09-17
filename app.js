let greetBtn = document.getElementById("greet-btn");
let greetLine = document.getElementById("greet-line");
function greet() {
  let userName = prompt("Enter Your Name");
  let age = +prompt("Enter Your Age");

  if (age >= 18) {
    greetLine.innerText = `Welcome ${userName}, You are Eligible for this course.`;
  } else if (age > 5 && age < 18) {
    greetLine.innerText = ` ${userName},Your age is ${age}, You are not Eligible for this course.`;
  } else {
    greetLine.innerText = `Enter Again`;
  }
}
