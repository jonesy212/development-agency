const form = document.querySelector('#contact-form');
const subject = form.querySelector('#subject').value;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const subject = form.querySelector('#subject').value;
  const message = form.querySelector('#message').value;
  const emailBody = `Subject: ${subject}%0D%0A%0D%0AName: ${name}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0AMessage: ${message}`;
  window.location.href = `mailto:energyiskey@protonmail.com?subject=New%20Email%20From%20${name}&body=${emailBody}`;
});
