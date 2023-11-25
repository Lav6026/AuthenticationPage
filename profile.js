// profile.js

window.addEventListener('DOMContentLoaded', function() {
    const accessToken = localStorage.getItem('accessToken');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  
    if (!accessToken || !userDetails) {
      window.location.href = 'index.html'; // Redirect to signup if no access token or details
    } else {
      displayUserProfile(userDetails);
    }
  
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function() {
      // Clear localStorage and redirect to signup page on logout
      localStorage.clear();
      window.location.href = 'index.html';
    });
  });
  
  function displayUserProfile(user) {
    document.getElementById('profile-username').textContent = user.username;
    document.getElementById('profile-email').textContent = user.email;
  }
  