const amountInput = document.getElementById('amountContainer');
const yearInput = document.getElementById('years');
const interestInput = document.getElementById('interest');
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})

function showError(inputElement, message, id) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    errorElement.id = id
    let spanElement;
    // Añadir clase de error al input
    inputElement.classList.add('error-input');
    if(errorElement.id === 'yearError') {
        errorElement.style.gridArea = 'error1';
    }else if(errorElement.id === 'interestError') {
        errorElement.style.gridArea = 'error2';
    }
    if(errorElement.id === 'yearError' || errorElement.id === 'interestError') {
        spanElement = inputElement.parentElement.children[1];
    }else {
        spanElement = inputElement.parentElement.children[0];
    }
    // Insertar el mensaje de error después del input
    const existingError = document.getElementById(id);
    if (!existingError) {
        inputElement.parentElement.insertAdjacentElement('afterend', errorElement);
        spanElement.classList.add('error');
        return false;
    }
    // // else {
    //     document.getElementById(id).remove();
    //     return true;
    // }
}
function validate() {
    let isValidAmount = showError(amountInput.children[1], 'the field is required', 'amountError');
    let isValidYear = showError(yearInput.children[0], 'the field is required', 'yearError');
    let isValidInterest = showError(interestInput.children[0], 'the field is required', 'interestError');
    amountInput.children[1].focus();
    console.log(`isValidAmount: ${isValidAmount}, isValidYear: ${isValidYear}, isValidInterest: ${isValidInterest}`);
    
}
