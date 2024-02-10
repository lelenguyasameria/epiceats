document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.querySelector('.signup a');
    const signupForm = document.getElementById('signupForm');
  
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      signupForm.style.display = 'block';
    });
  });