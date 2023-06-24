let a = prompt("hey whats your age?");
a = Number.parseInt(a);
if (a < 0) {
  alert("this is an invalid age");
} else if (a < 9) {
  alert("you are a kid and you cant even think of driving");
} else if (a < 18 && a >= 9) {
  alert("you are a kid but you can think of driving after 18 age");
} else {
  alert("you are eligible for driving");
}

//js ternary operator
console.log("you can", a < 18 ? "not drive" : "drive");
