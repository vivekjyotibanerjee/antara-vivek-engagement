const form = document.getElementById('rsvp-form');
const responseMessage = document.getElementById('submit-btn-txt');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    num_guests: document.getElementById('num-guests').value,
    diet: document.getElementById('diet').value,
    need_parking: document.getElementById('need-parking').checked,
    license_plate: document.getElementById('license-plate').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbycKu2hAg5-0ecY9Lgwp7c67AfovQ2qSTkH8pC_7mct4uIwrMzjqKa5YOa3T_NuEJs/exec', {
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