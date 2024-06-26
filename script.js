function validateEmail(){

// Get our input reference.
    let emailfield = document.getElementById('emailInput');
    let iconError = document.getElementById('icon-error');
    let msgError = document.getElementById('msg-error');

    // Define our regular expression.
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if(validEmail.test(emailfield.value) ){
        alert('email is valid , continue with form submission');
        return true;
    }else{
        msgError.classList.remove('hidden')
        iconError.classList.remove('hidden')
        return false;
    }

}   
