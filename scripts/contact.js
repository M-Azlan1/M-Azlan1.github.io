function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var error = "";

    if (name == "") {
      error += "Name is required.\n";
    }

    if (email == "") {
      error += "Email is required.\n";
    } else {
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        error += "Invalid email format.\n";
      }
    }

    if (message == "") {
      error += "Message is required.\n";
    }

    if (error !== "") {
      alert(error);
      return false;
    }
  }