
var eng = +prompt("Enter your English number.");
var urd = +prompt("Enter your Urdu number.");
var sci = +prompt("Enter your Science number.");
var mat = +prompt("Enter your Math value.");
var com = +prompt("Enter your Computer value.");

var obtainedMarks = eng+urd+sci+mat+com;
var TotalMarks = 500;

alert("Your obtained Marks is" +obtainedMarks);

var percentage = obtainedMarks / TotalMarks * 100;

alert("Your percentage is"+ percentage+"%");
