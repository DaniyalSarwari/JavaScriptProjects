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

//Function to show success
function showSuccess(input_fields) {
    const form_control = input_fields.parentNode;
    form_control.className += ' success';
}

//Check Email validity
function isValidEmail(email) {
    const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RE.test(String(email).toLowerCase());
}

//Function to check required field
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {        
        if (input.value === '') {
            showError(input,`${getInputFieldLabelText(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Function to get label text that associated with input field in proper text format
function getInputFieldLabelText(inputField) {
    const form_control = inputField.parentNode; // getting parent node
    const label =  form_control.querySelector('label'); //getting label element
    const labelText = label.innerText;
    return labelText.charAt(0).toUpperCase() + labelText.slice(1).toLowerCase();
}

//This is a event listner of form on submit
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,cfm_password]);
});