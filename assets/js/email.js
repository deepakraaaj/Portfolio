// Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#contact-form button[type='submit']");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject"); // Assuming you have a subject input field
const messageInput = document.querySelector("#message");
const loadingMessage = document.querySelector(".loading");
const errorMessage = document.querySelector(".error-message");
const sentMessage = document.querySelector(".sent-message");

// Get needed data from EmailJS
const serviceID = "service_wpe2r72"; // Replace with your EmailJS service ID
const templateID = "template_zxax6zb"; // Replace with your EmailJS template ID

// Create an object to store input field values
const inputFields = {
  name: nameInput.value,
  email: emailInput.value,
  subject: subjectInput.value, // Include subject input value
  message: messageInput.value
};

// Add an event listener to the contactForm for form submission
contactForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Change the button text while processing
  submitBtn.innerText = "Just A Moment...";

  // Get all input field values inside the event listener
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value, // Include subject input value
    message: messageInput.value
  };

  // Continue with sending the email using EmailJS as shown in the previous code
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      // Change button text after success
      submitBtn.innerText = "Message Sent Successfully";

      // Clear out all input fields
      nameInput.value = '';
      emailInput.value = '';
      subjectInput.value = ''; // Clear subject input value
      messageInput.value = '';

      // You can also hide or remove any other elements as needed
      errorMessage.style.display = 'none';
      loadingMessage.style.display = 'none';
      sentMessage.style.display = 'block';
    })
    .catch((error) => {
      // Handle any errors that occur during email sending
      console.error('Email sending failed:', error);

      // You can also show an error message or take other actions here
      errorMessage.style.display = 'block';
      loadingMessage.style.display = 'none';
      sentMessage.style.display = 'none';
    });
});
