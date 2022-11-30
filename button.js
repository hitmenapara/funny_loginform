const email= document.getElementById("email");
const password= document.getElementById("password");
const submitb= document.getElementById("submit");




submitb.addEventListener("mouseover",(button)=>{
	let email1=email.value;
	let password1=password.value;
	let validate=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.
	test(email1)&&/[a-zA-Z0-9]{8}/.test(password1)

	if (!validate) {
		button.target.classList.toggle("move");
	}
	else{
		button.target.classList.add("stop");
	}
}
)
