// Get the form element
const form = document.getElementById("contact-page");

// Get the input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Add an event listener to the form submit button
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Validate the form inputs
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameInput.classList.remove("error");
  }

  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value.trim())) {
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.remove("error");
  }

  if (messageInput.value.trim() === "") {
    messageInput.classList.add("error");
    isValid = false;
  } else {
    messageInput.classList.remove("error");
  }

  // Submit the form if it's valid
  if (isValid) {
    form.submit();
  }
});

// Helper function to validate email addresses
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}