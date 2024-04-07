//click
var inputField = document.getElementById("inputField");
        var btn = document.getElementById("btn");

        inputField.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                btn.click();
            }
        });
        
        btn.addEventListener("click", function() {
           
        });
  

//alert close
function hideAlertDiv() {
		const alertDiv = document.getElementById('alert');
		alertDiv.style.display = 'none';
	}
	
//popup js
/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))


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

	

