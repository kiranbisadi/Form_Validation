const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    // Input Fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Error Fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Success Message
    const successMessage = document.getElementById("successMessage");

    // Clearing Old messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    // Validation
    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {

        // Email pattern
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.textContent = "Enter valid email";
            isValid = false;
        }
    }

    // Password Validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {

        successMessage.textContent =
            "Registration Successful!";

        // Optional: Reset form
        signupForm.reset();
    }

});