const valInput = document.querySelector('#validation-input');

valInput.addEventListener('blur', (event) => {
    const correctLength = parseInt(valInput.getAttribute('data-length'), 10)
    const currentLength = event.currentTarget.value.length;

    if (currentLength === correctLength) {
        valInput.classList.remove('invalid');
        valInput.classList.add('valid');
    } else {
        valInput.classList.add('invalid');
        valInput.classList.remove('valid');
    }
});