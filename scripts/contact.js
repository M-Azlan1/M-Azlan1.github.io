const form = document.getElementById("contact-page");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate the name input
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameInput.nextElementSibling.textContent = "Name is required";
  } else {
    nameInput.classList.remove("error");
    nameInput.nextElementSibling.textContent = "";
  }

  // Validate the email input
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailInput.nextElementSibling.textContent = "Email is required";
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add("error");
    emailInput.nextElementSibling.textContent = "Please enter a valid email address";
  } else {
    emailInput.classList.remove("error");
    emailInput.nextElementSibling.textContent = "";
  }

  // Validate the message input
  if (messageInput.value === "") {
    messageInput.classList.add("error");
    messageInput.nextElementSibling.textContent = "Message is required";
  } else {
    messageInput.classList.remove("error");
    messageInput.nextElementSibling.textContent = "";
  }

  // Submit the form if all fields are valid
  if (!nameInput.classList.contains("error") && 
      !emailInput.classList.contains("error") && 
      !messageInput.classList.contains("error")) {
    form.submit();
  }
});

function isValidEmail(email) {
  // Source: https://emailregex.com/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}