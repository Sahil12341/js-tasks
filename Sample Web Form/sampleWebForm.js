function validateForm() {
    let isValid = true;


    let fullName = document.getElementById("fullName").value;
    if (!/^[A-Za-z ]{3,}$/.test(fullName)) {
        document.getElementById("nameError").textContent = "Full Name must be at least 3 characters and should not contain numbers.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

  
    let email = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }


    let phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }


    let password = document.getElementById("password").value;
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a number.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    let genderChecked = document.querySelector("input[name='gender']:checked");
    if (!genderChecked) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    let color = document.getElementById("color").value;
    if (color === "") {
        document.getElementById("colorError").textContent = "Please select your favorite color.";
        isValid = false;   
    } else {
        document.getElementById("colorError").textContent = "";
    }

    let resume = document.getElementById("resume").files[0];
    if (!resume || !/(\.pdf|\.doc|\.docx)$/i.test(resume.name)) {
        document.getElementById("resumeError").textContent = "Please upload a valid file in .pdf, .doc, or .docx format.";
        isValid = false;
    } else {
        document.getElementById("resumeError").textContent = "";
    }

    let terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
        isValid = false;
    } else {
        document.getElementById("termsError").textContent = "";
    }

    return isValid;
}