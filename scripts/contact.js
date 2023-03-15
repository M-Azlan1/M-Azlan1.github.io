function validateForm(event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Check if the name field is empty
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    event.preventDefault();
    return;
  }

  // Check if the email field is empty or not a valid email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Check if the message field is empty
  if (messageInput.value.trim() === "") {
    alert("Please enter a message.");
    event.preventDefault();
    return;
  }
}