const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfm_password = document.getElementById('cfm-password'); 

//This method used to response on error message on fields
function showError(input_fields,error_message) {
    const form_control = input_fields.parentNode;
    form_control.className += ' error';
    const small = form_control.querySelector('small');
    small.innerText = error_message;
}

//Function to shoe success
function showSuccess(input_fields) {
    const form_control = input_fields.parentNode;
    form_control.className += ' success';
}

//Check Email validity
function isValidEmail(email) {
    const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RE.test(String(email).toLowerCase());
}

//This is a event listner of form on submit
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (username.value === '') {
        showError(username,'Username is Required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email,'Email is Required');
    } else if (!isValidEmail(email.value)) {
        showError(email,'Not a Valid Email');
    }
    else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password,'Password is Required');
    } else {
        showSuccess(password);
    }

    if (cfm_password.value === '') {
        showError(cfm_password,'Confirm password is Required');
    } else {
        showSuccess(cfm_password);
    }
});