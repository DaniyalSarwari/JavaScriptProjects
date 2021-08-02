const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfm_password = document.getElementById('cfm-password'); 

//This method used to response on error message on fields
function showError(input_fields,error_message) {
    const form_control = input_fields.parentNode;
    form_control.className = 'form-control error';
    const small = form_control.querySelector('small');
    small.innerText = error_message;
}

//Function to show success
function showSuccess(input_fields) {
    const form_control = input_fields.parentNode;
    form_control.className = 'form-control success';
}

//Check Email validity
function checkEmail(input_field) {
    const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( !RE.test( input_field.value.trim().toLowerCase() ) ) {
        showError(input_field, "Please provide a valid email");
    } else {
        showSuccess(input_field);
    }
    
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

//Function to check length of input characters
function checkLength(input_field, min, max) {
    const charLength = input_field.value.length;    
        if ( charLength < min ) {
            showError(input_field, `${getInputFieldLabelText(input_field)} at least ${min} characters long`);
        } else if (charLength > max) {
            showError(input_field, `${getInputFieldLabelText(input_field)} needs to be less than ${max} characters`);
        }else{
            showSuccess(input_field);
        }
}

//This function check the password match
function checkPasswordMatch(field1, field2) {
    if (field1.value !== field2.value) {
        showError(field2, "Password don't match");
    }
}

//This is a event listner of form on submit
form.addEventListener('submit', function(e){
    e.preventDefault();    

    checkRequired([username,email,password,cfm_password]);

    checkLength(username,3,10);
    checkLength(password,6,20);

    checkEmail(email);
    
    checkPasswordMatch(password,cfm_password);
});