function redirectToPage(page) {
    window.location.href = page;
}

const form = document.getElementById('appointmentForm');
const submitButton = document.getElementById('submitButton');
const hint = document.getElementById('hint');
const successMessage = document.getElementById('successMessage');
const inputs = form.querySelectorAll('input, select');

inputs.forEach(input => {
    input.addEventListener('input', checkForm);
});

function checkForm() {
    let isFormFilled = true;
    inputs.forEach(input => {
        if (!input.value) {
            isFormFilled = false;
        }
    });
    submitButton.disabled = !isFormFilled;
}

function trySubmitForm() {
    let isFormFilled = true;
    inputs.forEach(input => {
        if (!input.value) {
            isFormFilled = false;
        }
    });

    if (isFormFilled) {
        clearForm();
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } else {
        hint.style.display = 'block';
        setTimeout(() => {
            hint.style.display = 'none';
        }, 3000);
    }
}

function clearForm() {
    form.reset();
    submitButton.disabled = true;
}



document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
    document.querySelectorAll('.rating input').forEach(radio => {
        radio.checked = false;
    });
});


let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}