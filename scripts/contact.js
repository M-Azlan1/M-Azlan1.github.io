// Get the form element
const contactForm = document.getElementById("contact-page");

// Add an event listener to the form submit event
contactForm.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Get the values of the form fields
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Check if any of the fields are empty
  if (nameValue === "" || emailValue === "" || messageValue === "") {
    // Display an alert if any of the fields are empty
    alert("Please fill in all the fields.");
  } else {
    // Submit the form if all the fields are filled
    contactForm.submit();
  }
});