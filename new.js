// Get the form element and the toast message
const form = document.getElementById('clientForm');
const toastMessage = document.getElementById('toastMessage');

// Add event listener to the form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Show the toast message
    toastMessage.style.display = 'block';
    toastMessage.style.opacity = '1'; // Fade in effect

    // Hide the toast message after 3 seconds
    setTimeout(function () {
        toastMessage.style.opacity = '0'; // Fade out effect
        setTimeout(function () {
            toastMessage.style.display = 'none'; // Hide the toast message completely
        }, 300); // Slight delay to allow for the fade-out effect
    }, 3000); // Display the toast for exactly 3 seconds
});
