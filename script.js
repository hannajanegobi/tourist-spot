function sendMessage(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email-input').value;
  const message = document.getElementById('message').value;

  // You can customize the code below to handle the form submission (e.g., send an email, store the message in a database, etc.)
  // This is just a basic example to show a success message
  if (name && email && message) {
    document.getElementById('success-message').classList.remove('hidden');
    document.getElementById('message-form').reset();
  }
}

// Set contact details
document.getElementById('phone').innerText = '09631937268';
document.getElementById('email').innerText = 'hannajane@gmail.com';
document.getElementById('address').innerText = 'Mahagnao, Burauen, Leyte';