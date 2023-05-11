const form = document.querySelector('.email-me form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const message = form.querySelector('#message').value;
  const emailBody = `Name: ${name}%0D%0A%0D%0AMessage: ${message}`;
  window.location.href = `mailto:youremail@yourdomain.com?subject=New%20Email%20From%20${name}&body=${emailBody}`;
});


