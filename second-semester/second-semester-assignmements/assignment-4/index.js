document.addEventListener("DOMContentLoaded", function () {
  const headingParagraph = document.querySelector(".headingParagraph");
  const passwordIcon = document.querySelector(".show");
  const passwordField = document.querySelector("#input-password");

  function changeText() {
    if (window.matchMedia("(max-width: 450px)").matches) {
      headingParagraph.textContent = `Inspiring wholesome harmony for the mind, body and spirit, for
            everyone, everywhere.`;
    } else {
      headingParagraph.textContent = `Start benefiting from the wellness experience. For companies looking
            on increasing productivity, and improving organizzational wellness.`;
    }
  }

  changeText();
  window.addEventListener("resize", changeText);

  passwordIcon.addEventListener("click", () => {
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    if (passwordIcon.getAttribute("src") === "./assets/show.svg") {
      passwordIcon.setAttribute("src", "./assets/hide.svg");
    } else {
      passwordIcon.setAttribute("src", "./assets/show.svg");
    }
  });

  document
    .getElementById("signup-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = document.getElementById("input-firstname");
      const lastName = document.getElementById("input-lastname");
      const gender = document.getElementById("input-gender").value;
      const dateOfBirth = document.getElementById("input-date").value;
      let weight = document.getElementById("input-weight").value;
      const height = document.getElementById("input-height").value;
      const activityLevel = document.getElementById("input-activity").value;
      const password = document.getElementById("input-password").value;
      const displayText = document.getElementById("display_text");
      const showPassword = document.querySelector(".show");

      let isValid = true;

      // Error elements
      const fNameError = document.querySelector(".fn-error");
      const lNameError = document.querySelector(".ln-error");
      const genderError = document.querySelector(".gender-error");
      const dobError = document.querySelector(".dob-error");
      const weightError = document.querySelector(".weight-error");
      const heightError = document.querySelector(".height-error");
      const activityError = document.querySelector(".activity-error");
      const passwordError = document.querySelector(".password-error");

      // First Name validation
      if (firstName.value.trim() === "") {
        fNameError.innerHTML = "Please fill in your first name.";
        // firstName.style.border = "1px solid red";
        isValid = false;
      } else if (firstName.value.includes(" ")) {
        fNameError.innerHTML = "First name cannot contain spaces.";
        // firstName.style.border = "1px solid red";
        isValid = false;
      } else if (firstName.value.trim().length < 2) {
        fNameError.innerHTML = "First name must be at least 2 characters long.";
        // firstName.style.border = "1px solid red";
        isValid = false;
      } else {
        fNameError.innerHTML = "";
        firstName.style.border = "none";
      }

      // Last Name validation
      if (lastName.value.trim() === "") {
        lNameError.innerHTML = "Please fill in your last name.";
        // lastName.style.border = "1px solid red";
        isValid = false;
      } else if (lastName.value.includes(" ")) {
        lNameError.innerHTML = "Last name cannot contain spaces.";
        // lastName.style.border = "1px solid red";
        isValid = false;
      } else if (lastName.value.trim().length < 2) {
        lNameError.innerHTML = "Last name must be at least 2 characters long.";
        // lastName.style.border = "1px solid red";
        isValid = false;
      } else {
        lNameError.innerHTML = "";
        lastName.style.border = "none";
      }

      // Gender validation
      if (!gender) {
        genderError.innerHTML = "Please select a gender";
        isValid = false;
      } else {
        genderError.innerHTML = "";
      }

      // Date of Birth validation
      if (!dateOfBirth) {
        dobError.innerHTML = "Please select a date of birth";
        displayText.style.bottom = "32px";
        isValid = false;
      } else {
        dobError.innerHTML = "";
      }

      // Weight validation
      if (!weight || isNaN(weight) || weight <= 0) {
        weightError.innerHTML = "Please enter a valid weight";
        isValid = false;
      } else {
        weightError.innerHTML = "";
        weight += " KG";
      }

      // Height validation
      if (!height || isNaN(height) || height <= 0) {
        heightError.innerHTML = "Please enter a valid height";
        isValid = false;
      } else {
        heightError.innerHTML = "";
      }

      // Activity Level validation
      if (!activityLevel) {
        activityError.innerHTML = "Please select an activity";
        isValid = false;
      } else {
        activityError.innerHTML = "";
      }

      // Password validation
      function validatePassword(password) {
        const passwordPattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&/\\-]{8,}$/;
        return passwordPattern.test(password);
      }

      if (!validatePassword(password) || password.length < 8) {
        isValid = false;
        passwordError.innerHTML =
          "Password must contain at least 8 characters, including uppercase, lowercase, and a number.";
        showPassword.style.top = "40%";
      } else {
        passwordError.innerHTML = "";
        showPassword.style.top = "60%";
      }

      if (isValid) {
        alert("Form submitted successfully!");
        // Proceed with form submission or further processing
      }

      const formData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        gender: gender.value.trim(),
        dateOfBirth: dateOfBirth.value.trim(),
        height: height.value.trim(),
        weight: weight.value.trim(),
        activity: activityLevel.value.trim(),
        password: password.value.trim(),
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

  // Hide placeholder text on date input change
  let date_ = document.querySelector('input[type="date"]');
  date_.onchange = (e) => {
    document.querySelector("#display_text").style.display = "none";
    date_.style.color = "initial";
  };
});
