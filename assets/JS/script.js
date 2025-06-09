const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.children[0].addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        const selectedValue = option.getAttribute('data-value');
        const inputField = document.querySelector('.input-field');
        inputField.value = selectedValue;

        // Optionally, you can trigger a change event if needed
        inputField.dispatchEvent(new Event('change'));
    });
})