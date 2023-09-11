// email.js

(function () {
    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY');
})();

window.onload = function () {
    document.getElementById('template_zxax6zb').addEventListener('submit', function (event) {
        event.preventDefault();
        // Generate a five-digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // Use EmailJS to send the form data
        emailjs.sendForm('service_wpe2r72', 'template_zxax6zb', this)
        .then(function () {
            console.log('SUCCESS!');
            // Hide loading message and show success message
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.sent-message').style.display = 'block';
        })
        .catch(function (error) {
            console.log('FAILED...', error);
            // Hide loading message and show error message
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.error-message').style.display = 'block';
        });
    });
};
