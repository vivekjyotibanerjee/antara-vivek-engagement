const form = document.getElementById('rsvp-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    num_guests: document.getElementById('num-guests').value,
    diet: document.getElementById('diet').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyGydFv3oGIuMarOKaG6rXq0U-UAUlF1ipfwd5e6MIJZ2cQoJzfjRKczN1KRT5mvrZc/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      responseMessage.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    } else {
      responseMessage.textContent = 'Error submitting the form. Please try again.';
    }
  } catch (error) {
    responseMessage.textContent = 'An error occurred. Please try again.';
  }
});