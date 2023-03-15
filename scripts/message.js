const form = document.getElementById('contact-page');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission

  // get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // check if input values are not empty
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.'); // show error message if any field is empty
  } else {
    // display thank you message
    const section = document.querySelector('section');
    section.innerHTML = '<h2>Thank you for contacting me!</h2><p>I will get back to you as soon as possible.</p>';
  }
});