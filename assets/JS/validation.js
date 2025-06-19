const amountInput = document.getElementById('amountContainer');
const yearInput = document.getElementById('years');
const interestInput = document.getElementById('interest');
const btnSubmit = document.getElementById('btnSubmit');
const optionsElements = document.querySelector('.selected');
const optionContainer = document.getElementById('opcions')
const clearButton = document.getElementById('clear');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})
clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Clear all input fields
    amountInput.children[1].value = '';
    yearInput.children[0].value = '';
    interestInput.children[0].value = '';
    
    // Remove error messages and classes
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const errorInputs = document.querySelectorAll('.error-input');
    errorInputs.forEach(input => input.classList.remove('error-input'));
    
    const spanElements = document.querySelectorAll('.error');
    spanElements.forEach(span => span.classList.remove('error'));
    
    // Reset selected option
    optionContainer.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
        option.children[0].checked = false;
    });
})
function showError(inputElement, message, id) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    errorElement.id = id
    let spanElement;
    let isNumber = isNaN(inputElement.value);
    if(inputElement.value === '' || isNumber === true) {
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
        inputElement.classList.add('error-input');
        inputElement.parentElement.insertAdjacentElement('afterend', errorElement);
        spanElement.classList.add('error');
        return false;
    }
    }else{
        // Si el input ya tiene un mensaje de error, no hacer nada
        const existingError = document.getElementById(id);
            if(errorElement.id === 'yearError' || errorElement.id === 'interestError') {
                 spanElement = inputElement.parentElement.children[1];
             }else {
                spanElement = inputElement.parentElement.children[0];
            }
        if (existingError) {
            existingError.remove();
            inputElement.classList.remove('error-input');
            spanElement.classList.remove('error');
        }
        return true;
        
    }
    
}
function validate() {
    let isValidAmount = showError(amountInput.children[1], 'the field is required', 'amountError');
    let isValidYear = showError(yearInput.children[0], 'the field is required', 'yearError');
    let isValidInterest = showError(interestInput.children[0], 'the field is required', 'interestError');
    console.log(`isValidAmount: ${isValidAmount}, isValidYear: ${isValidYear}, isValidInterest: ${isValidInterest}`);
    if(!optionsElements){
        const errorElement = document.createElement('p');
        errorElement.classList.add('error-message');
        errorElement.textContent = 'Please select an option';
        errorElement.id = 'optionError';
        const existingError = document.getElementById('optionError');
        if (!existingError) {
            optionContainer.insertAdjacentElement('afterend', errorElement);
            return false;
        }
    }
}
