const form = document.getElementById("registerForm");

const nameRegex = /^[A-Za-z ]{3,50}$/;

const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const mobileRegex =
    /^[6-9][0-9]{9}$/;

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const course =
        document.getElementById("course").value;

    const year =
        document.getElementById("year").value;

    const terms =
        document.getElementById("terms").checked;

    const gender =
        document.querySelector('input[name="gender"]:checked');

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        valid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById("nameError").textContent =
            "Enter a valid name.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (mobile === "") {
        document.getElementById("mobileError").textContent =
            "Mobile number is required.";
        valid = false;
    } else if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").textContent =
            "Enter a valid 10 digit mobile number.";
        valid = false;
    } else {
        document.getElementById("mobileError").textContent = "";
    }

    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required.";
        valid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must contain 8 characters, uppercase, lowercase, number and special character.";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    if (course === "") {
        document.getElementById("courseError").textContent =
            "Please select a course.";
        valid = false;
    } else {
        document.getElementById("courseError").textContent = "";
    }

    if (year === "") {
        document.getElementById("yearError").textContent =
            "Please select your year.";
        valid = false;
    } else {
        document.getElementById("yearError").textContent = "";
    }

    if (!gender) {
        document.getElementById("genderError").textContent =
            "Please select your gender.";
        valid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    if (!terms) {
        document.getElementById("termsError").textContent =
            "Please accept the Terms and Conditions.";
        valid = false;
    } else {
        document.getElementById("termsError").textContent = "";
    }

    if (valid) {
        document.getElementById("successMessage").textContent =
            "Registration Successful!";
        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    }

});

const passwordInput =
    document.getElementById("password");

const passwordStrength =
    document.getElementById("passwordStrength");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    if (password.length === 0) {
        passwordStrength.textContent = "";

    } else if (password.length < 6) {
        passwordStrength.textContent =
            "Password Strength: Weak";

        passwordStrength.style.color = "red";

    } else if (!passwordRegex.test(password)) {
        passwordStrength.textContent =
            "Password Strength: Medium";

        passwordStrength.style.color = "orange";

    } else {
        passwordStrength.textContent =
            "Password Strength: Strong";

        passwordStrength.style.color = "green";

    }

});

