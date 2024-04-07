//search
document.getElementById('btn').addEventListener('click', function() {
  const inputField = document.getElementById('inputField');
  const inputValue = inputField.value.trim();
  const alertDiv = document.getElementById('alert');

  if (inputValue === '1') {
    window.open('https://www.google.com/', '_blank');
  } else if (inputValue === '2') {
    window.open('https://www.microsoft.com/', '_blank');
  } else {
    alertDiv.style.display = 'block'; // Show the alert div
    setTimeout(() => {
      alertDiv.style.display = 'none'; // Hide the alert div after 3 seconds
    }, 5000);
  }
});



	