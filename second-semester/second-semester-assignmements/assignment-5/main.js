document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const mega = document.querySelector(".mega");
  const hamburger = document.querySelector(".navbar");
  const nav = document.querySelector(".nav-items");

  // navbar toggle

  hamburger.addEventListener("click", () => {
    if (hamburger.getAttribute("src") === "./assets/hamburger.svg") {
      hamburger.setAttribute("src", "./assets/close-hamburger.svg");
      nav.classList.add("display");
    } else {
      hamburger.setAttribute("src", "./assets/hamburger.svg");
      nav.classList.remove("display");
    }
  });

  // FORM VALIDATION
  const fName = document.getElementById("first-name");
  const lName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const cardNumber = document.getElementById("card-number");
  const expiryDate = document.getElementById("expiry-date");
  const cvv = document.getElementById("cvv");
  const cardBox = document.querySelector(".card-input-box");

  // ERROR MESSAGES
  const fNameError = document.querySelector(".error");
  const lNameError = document.querySelector(".error1");
  const emailError = document.querySelector(".error2");
  const expiryError = document.querySelector(".expiry-error");
  const cardError = document.querySelector(".payment-message");
  const cvvError = document.querySelector(".cvv-error");

  // Event listener for the mega variable
  mega.addEventListener("click", (e) => {
    e.preventDefault();

    // Validate First Name
    if (fName.value.trim() === "") {
      fNameError.innerHTML = "Please fill in your first name.";
      fName.style.border = "1px solid red";
    } else if (fName.value.includes(" ")) {
      fNameError.innerHTML = "First name cannot contain spaces.";
      fName.style.border = "1px solid red";
    } else if (fName.value.trim().length < 2) {
      fNameError.innerHTML = "First name must be at least 2 characters long.";
      fName.style.border = "1px solid red";
    } else {
      fNameError.innerHTML = "";
      fName.style.border = "none";
    }

    // Validate Last Name

    if (lName.value.trim() === "") {
      lNameError.innerHTML = "Please fill in your last name.";
      lName.style.border = "1px solid red";
    } else if (lName.value.includes(" ")) {
      lNameError.innerHTML = "Last name cannot contain spaces.";
      lName.style.border = "1px solid red";
    } else if (lName.value.trim().length < 2) {
      lNameError.innerHTML = "Last name must be at least 2 characters long.";
      lName.style.border = "1px solid red";
    } else {
      lNameError.innerHTML = "";
      lName.style.border = "none";
    }
    // Validate Email
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    const emailValue = email.value.trim();
    if (validateEmail(emailValue)) {
      emailError.innerHTML = "";
      email.style.border = "none";
    } else {
      email.value = "";
      emailError.innerHTML = "Please enter a valid email address.";
      email.style.border = "1px solid red";
    }

    // Function to validate the card number
    // The luhn algorithm (revisit)
    function validateCardNumber(number) {
      let sum = 0;
      let shouldDouble = false;
      for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i]);

        if (shouldDouble) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
      }

      return sum % 10 === 0;
    }

    // Get the card number input value
    const cardNumValue = cardNumber.value.trim();

    // Validate card number (Luhn check)
    if (!validateCardNumber(cardNumValue)) {
      cardError.innerHTML = "Invalid card number.";
      cardBox.style.border = "1px solid red";
      // Highlight invalid card number
    } else if (cardNumber.value === "") {
      cardError.innerHTML = "field cannot be empty";
      cardBox.style.border = "1px solid red";
    } else {
      cardError.innerHTML = "";
      cardBox.style.border = "none";
      //   cardNumber.style.border = "1px solid green "; // Clear red border if valid
    }

    // Validate Expiry Date (MM/YYYY format)
    function validateExpiryDate(expiry) {
      const [month, year] = expiry.split("/");

      if (!month || !year || month.length !== 2 || year.length !== 4) {
        return false;
      }

      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);

      if (isNaN(monthNum) || isNaN(yearNum) || monthNum < 1 || monthNum > 12) {
        return false;
      }

      // Check if the expiry date is in the past
      const now = new Date();
      const expiryDate = new Date(yearNum, monthNum - 1); // just learnt that jstmonths are 0-indexed
      return expiryDate >= now;
    }

    const expiryValue = expiryDate.value.trim();
    if (!validateExpiryDate(expiryValue)) {
      expiryError.innerHTML = "Invalid expiry date. Use MM/YYYY format.";
      cardBox.style.border = "1px solid red";
    } else {
      expiryError.innerHTML = "";
      cardBox.style.border = "none";
    }

    // Validate CVV
    function validateCVV(cvvValue) {
      const cvvPattern = /^\d{3,4}$/;
      return cvvPattern.test(cvvValue);
    }

    const cvvValue = cvv.value.trim();
    if (!validateCVV(cvvValue)) {
      //   alert("hi");
      cvvError.innerHTML = "Invalid CVV. It should be 3 or 4 digits.";
      //   cvv.style.border = "1px solid red"; // Red border if invalid
    } else {
      cvvError.innerHTML = "";
      //   cvv.style.border = "none";
    }

    // capturing the form data in an object for processing

    const formData = {
      firstName: fName.value.trim(),
      lastName: lName.value.trim(),
      email: email.value.trim(),
      cardNumber: cardNumber.value.trim(),
      expiryDate: expiryDate.value.trim(),
      cvv: cvv.value.trim(),
    };

    fetch("end point url", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.staus === "success") {
          alert("form submitted successfully");
        } else {
          alert("form submission failed" + data.message);
        }
      })
      .catch((error) => {
        console.error("error submitting form", error);
        console.log("there was an error submitting yuor form "); //revisit this again to perfevt knowledge
      });
  });
});
