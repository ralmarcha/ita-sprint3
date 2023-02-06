
//Exercise 7
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");


	const letters = /^[A-Za-z]+$/;
	const numbers = /^[0-9]+$/;
	const letterNumber = /^[0-9a-zA-Z]+$/;
	const mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == '' || fName.value.length <= 3 || !fName.value.match(letters)) {
		fName.classList.remove("is-valid");
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-isvalid");
	}
	if (fEmail.value == '' || fEmail.length <= 3 || !fEmail.value.match(mail)) {
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-isvalid");
	}
	if (fPhone.value == '' || fPhone.length <= 3 || !fPhone.value.match(numbers)) {
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-isvalid");
	}
	if (fPassword.value == '' || fPassword.length <= 3 || !fPassword.value.match(letterNumber)) {
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-isvalid");
	}
	if (fAddress.value == '' || fAddress.length <= 3) {
		fAddress.classList.remove("is-valid");
		fAddress.classList.add("is-invalid");
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-isvalid");
	}
	if (fLastN.value == '' || fLastN.length <= 3) {
		fLastN.classList.remove("is-valid");
		fLastN.classList.add("is-invalid");
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-isvalid");
	}
	if(error>0){
		alert("Error");
		event.preventDefault();
	}else{
		alert("OK");
	}

}

document.querySelector(".needs-validation").addEventListener("submit", validate);





