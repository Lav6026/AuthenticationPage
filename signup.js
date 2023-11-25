// signup.js

const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Generate random access token (16-byte string)
  const accessToken = generateAccessToken();

  // Store user details and token in localStorage
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('userDetails', JSON.stringify({ username, email }));

  signupMessage.textContent = 'Signup successful!';
  setTimeout(() => {
    window.location.href = 'profile.html';
  }, 2000); // Redirect to profile page after 2 seconds
});

function generateAccessToken() {
  // Generate a random 16-byte access token (not cryptographically secure)
  return Math.random().toString(36).substring(2, 18);
}
