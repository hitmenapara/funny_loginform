const email= document.getElementById("email");
const submitb= document.getElementById("submit");
const password= document.getElementById("password");

submitb.addEventListener("mouseover",(button)=>{
	let password1=password.value;
	var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	if(password1.match(regularExpression)){
		button.target.classList.add("stop");
		console.log("Validate");
	}
	else{
		button.target.classList.toggle("move");
		console.log(password.value);
	}
})

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
myInput.onfocus = function() {
	document.getElementById("message").style.display = "block";
}
// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
	document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {  
	letter.classList.remove("invalid");
	letter.classList.add("valid");
} else {
	letter.classList.remove("valid");
	letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
	capital.classList.remove("invalid");
	capital.classList.add("valid");
} else {
	capital.classList.remove("valid");
	capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
	number.classList.remove("invalid");
	number.classList.add("valid");
} else {
	number.classList.remove("valid");
	number.classList.add("invalid");
}

// Validate length
if(myInput.value.length >= 8) {
	length.classList.remove("invalid");
	length.classList.add("valid");
} else {
	length.classList.remove("valid");
	length.classList.add("invalid");
}
}
function validation(){
	var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	if(password.value.match(regularExpression)){
		window.location.href = "cal.html";
	}
	else{
		console.log("true");
	}
}
