function validateEmail(email) {
    var email = document.getElementById("email").value;
    console.log(email);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;

    var isValid = emailPattern.test(email);

    if (isValid) {
        document.getElementById('Enter').innerHTML = 'Good Job!!!';

    }
        
    else {
        document.getElementById('Enter').innerHTML = 'Enter a correct Email';

    }
}
