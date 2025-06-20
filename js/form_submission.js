const form = document.getElementById('rsvp-form');
const responseMessage = document.getElementById('submit-btn-txt');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    first_name: document.getElementById('first-name').value,
    last_name: document.getElementById('last-name').value,
    email: document.getElementById('email').value,
    phone_number: document.getElementById('phone-number').value,
    num_guests: document.getElementById('num-guests').value,
    diet: document.getElementById('diet').value,
    need_parking: document.getElementById('need-parking').checked,
    license_plate: document.getElementById('license-plate').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyhrUP4zIFFD4Y1K4cvIpIJe7P2YkJVD71ZdAGEj-GDEwJW5ghnfCr-sKwMZUlQDejq/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (response.ok) {
        form.reset();
        responseMessage.textContent = 'Thank you! ';
    } else {
        responseMessage.textContent = 'Error submitting the form. Please try again.';
    }
  } catch (error) {
    responseMessage.textContent = 'An error occurred. Please try again.';
  }
  classList.remove("button--loading");
});
