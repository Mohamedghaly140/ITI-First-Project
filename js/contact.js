const nameInput = document.getElementById("name");
const nameAlert = document.getElementById("nameAlert");

const emailInput = document.getElementById("email");
const emailAlert = document.getElementById("emailAlert");

function validateName(name) {
	let regex = /^[a-zA-Z ]{2,30}$/;
	if (regex.test(name)) {
		nameAlert.classList.replace("d-block", "d-none");
		nameInput.classList.remove("is-invalid");
		nameInput.classList.add("is-valid");
		isValid = true;
	} else {
		nameAlert.classList.replace("d-none", "d-block");
		nameInput.classList.add("is-invalid");
		nameInput.classList.remove("is-valid");
	}
}

nameInput.addEventListener("keyup", () => {
	validateName(nameInput.value);
});

function validateEmail(email) {
	let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (regex.test(email)) {
		emailAlert.classList.replace("d-block", "d-none");
		emailInput.classList.remove("is-invalid");
		emailInput.classList.add("is-valid");
		isValid = true;
	} else {
		emailAlert.classList.replace("d-none", "d-block");
		emailInput.classList.add("is-invalid");
		emailInput.classList.remove("is-valid");
	}
}

emailInput.addEventListener("keyup", () => {
	validateEmail(emailInput.value);
});
