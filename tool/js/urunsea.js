//search
document.getElementById('btn').addEventListener('click', function() {
  const inputField = document.getElementById('inputField');
  const inputValue = inputField.value.trim();
  const alertDiv = document.getElementById('alert');

  if (inputValue === '8919') {
    window.open('https://www.n11.com/urun/rampage-ally-k11-12-isik-modlu-red-switch-mekanik-antighosting-bilek-destekli-oyuncu-klavye-44056679?magaza=7-24siparis', '_blank');
  } else if (inputValue === '5258') {
    window.open('https://ty.gl/zjugdk5x98', '_blank');
  } else if (inputValue === '5105) {
    window.open('https://ty.gl/9ev2qktvfo', '_blank');
  } else {
    alertDiv.style.display = 'block'; // Show the alert div
    setTimeout(() => {
      alertDiv.style.display = 'none'; // Hide the alert div after 3 seconds
    }, 5000);
  }
});



	
